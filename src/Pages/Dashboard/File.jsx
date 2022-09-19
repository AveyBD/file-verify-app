import React, { useEffect, useState } from 'react';
import AllFile from './AllFile';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';

const File = () => {
    const { isLoading, error, data:allFiles,refetch } = useQuery('allFiles', () =>
    fetch(('http://localhost:5000/files'), {
      method: 'GET',
      headers: {
        "content-type": "application/json",
      }
    }).then(res =>
      res.json()
    )    
  )
  refetch()

  if (isLoading) {
    return <Loading/>
  }

  if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className='grid gap-10 grid-cols-2 lg:grid-cols-4 mr-10 p-20'>
                <div class="card w-full h-32 bg-orange-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">{allFiles.length}</h2>
                        <p>Total files</p>
                    </div>
                </div>

                <div class="card w-full h-32 bg-lime-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">9</h2>
                        <p>Closed Bugs</p>

                    </div>
                </div>

                <div class="card w-full h-32 bg-green-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">12</h2>
                        <p>Overdue</p>
                    </div>
                </div>

                <div class="card w-full h-32 bg-teal-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">8</h2>
                        <p>Due in 7 days</p>
                    </div>
                </div>
            </div>
            <AllFile/>
        </div>
    );
};

export default File;