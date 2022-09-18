import React from 'react';
import AllFile from './AllFile';

const File = () => {
    return (
        <div>
            <div className='grid gap-10 grid-cols-2 lg:grid-cols-5 mr-10 p-10'>
                <div class="card w-40 h-32 bg-orange-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">36</h2>
                        <p>Open Bugs</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-lime-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">9</h2>
                        <p>Closed Bugs</p>

                    </div>
                </div>

                <div class="card w-40 h-32 bg-green-600 shadow-xl">
                    <div class="card-body text-center text-white">
                        <h2 class="text-2xl font-bold">12</h2>
                        <p>Overdue</p>
                    </div>
                </div>

                <div class="card w-40 h-32 bg-teal-600 shadow-xl">
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