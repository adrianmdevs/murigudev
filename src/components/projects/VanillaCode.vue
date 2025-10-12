<template>
    <div class="flex flex-col">
        <span>Vanilla Code</span>
        <div class="flex flex-col space-y-2">
            <p>This section contains vanilla source code</p>
            <p>You can click each repo to view the code</p>
            <p>Alternatively, you can skip directly to my github account by clicking the button above</p>
        </div>
        <!--Project Container-->
        <div class="grid w-full grid-cols-1 py-5 gap-y-10 md:gap-y-4 place-items-center lg:grid-cols-2">
            <!--Project Card-->
            <div class="flex flex-col space-y-2.5 p-2.5 w-3/4 border md:w-72 rounded-xl">
                <div class="flex">
                    <span class="text-lg font-semibold">PHP_PATH</span>
                </div>
                <div>
                    <p>Learning code for PHP</p>
                </div>
                <button class="w-full py-2.5 rounded-xl border border-green-400">
                    <span>Code</span>
                </button>
                
            </div>

            <div class="flex flex-col space-y-2.5 p-2.5 w-3/4 border md:w-72 rounded-xl">
                <div class="flex">
                    <span class="text-lg font-semibold">PYTHON_PATH</span>
                </div>
                <div>
                    <p>Learning code for Python</p>
                </div>
                <button class="w-full py-2.5 rounded-xl border border-green-400">
                    <span>Code</span>
                </button>
                
            </div>
        </div>
    </div>
</template>