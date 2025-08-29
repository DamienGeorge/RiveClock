//region Timeout Variables


try {
    // Get the canvas element
    const canvas = document.getElementById('rive-canvas');

    const StateMachineName = "State Machine 1"; //Found in animations section
    const artBoard = "Main"; //Found in Hierarchy section
    // Create Rive instance
    riveInstance = new rive.Rive({
        src: 'flip_clock_r10_(2).riv',
        canvas: canvas,
        autoplay: true,
        autoBind: true,
        artboard: artBoard,
        stateMachines: StateMachineName, // This ensures that animation is playing
        onLoad: () => {
            console.log('Rive animation loaded successfully');
            // Fit the animation to the canvas
            computeSize();

            //this is how to access the autobind instance
            const viewModelInstance = riveInstance.viewModelInstance;
            const flapModelInstance = riveInstance.viewModelByIndex(1);

            console.log(viewModelInstance);
            console.log(flapModelInstance);

            const hour1Input = viewModelInstance.viewModel('1 Hour 1 ins').number('0 CurrentTime');
            const hour2Input = viewModelInstance.viewModel('1 Hour 2 ins').number('0 CurrentTime');
            const minute1Input = viewModelInstance.viewModel('2 Min 1 ins').number('0 CurrentTime');
            const minute2Input = viewModelInstance.viewModel('2 Min 2 ins').number('0 CurrentTime');
            const second1Input = viewModelInstance.viewModel('3 Sec 1 ins').number('0 CurrentTime');
            const second2Input = viewModelInstance.viewModel('3 Sec 2 ins').number('0 CurrentTime');


            function updateTime() {
                dateTime = new Date();

                //Actual implementation
                // hour1Input.value = Math.floor(dateTime.getHours() / 10);
                // hour2Input.value = dateTime.getHours() % 10;
                // minute1Input.value = Math.floor(dateTime.getMinutes() / 10);
                // minute2Input.value = dateTime.getMinutes() % 10;

                // hour1OldInput.value = hour1Input.value-1;
                // hour2OldInput.value =hour2Input.value-1;
                // minute1OldInput.value = minute1Input.value-1;
                // minute2OldInput.value = minute2Input.value -1;

                hour1Input.value = Math.floor(dateTime.getHours() / 10);
                hour2Input.value = dateTime.getHours() % 10;
                minute1Input.value = Math.floor(dateTime.getMinutes() / 10);
                minute2Input.value = dateTime.getMinutes() % 10;
                second1Input.value = Math.floor(dateTime.getSeconds() / 10);
                second2Input.value = dateTime.getSeconds() % 10;
            }

            setInterval(updateTime);
        },
        onLoadError: (error) => {
            console.error('Failed to load Rive animation:', error);
        }
    });

    function computeSize() {
        riveInstance.resizeDrawingSurfaceToCanvas();
    }

    window
        .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
        .addEventListener("change", computeSize);

}
catch (error) {
    console.error('Failed to load Rive animation:', error);
}