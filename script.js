//region Timeout Variables


try {
    // Get the canvas element
    const canvas = document.getElementById('rive-canvas');

    const StateMachineName = "State Machine 1"; //Found in animations section
    const artBoard = "Main"; //Found in Hierarchy section
    // Create Rive instance
    riveInstance = new rive.Rive({
        src: 'flip_clock_r2_small_artboard_test.riv',
        canvas: canvas,
        autoplay: true,
        autoBind: true,
        artboard: artBoard,
        stateMachines: StateMachineName, // This ensures that animation is playing
        onLoad: () => {
            console.log('Rive animation loaded successfully');
            // Fit the animation to the canvas
            computeSize();

            consoleInputs = riveInstance.stateMachineInputs(StateMachineName);
            //this is how to access the autobind instance
            const digitModelInstance = riveInstance.viewModelInstance;
            const viewModelInstance = riveInstance.viewModelByIndex(1);

            const hour1Input = digitModelInstance.viewModel('VM H1').number('CurrentTime');
            const hour2Input = digitModelInstance.viewModel('VM H2').number('CurrentTime');
            const minute1Input = digitModelInstance.viewModel('VM M1').number('CurrentTime');
            const minute2Input = digitModelInstance.viewModel('VM M2').number('CurrentTime');

            //old Time
            const hour1OldInput = digitModelInstance.viewModel('VM H1').number('OldTime');
            const hour2OldInput = digitModelInstance.viewModel('VM H2').number('OldTime');
            const minute1OldInput = digitModelInstance.viewModel('VM M1').number('OldTime');
            const minute2OldInput = digitModelInstance.viewModel('VM M2').number('OldTime');

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

                //Demo implementation
                hour1OldInput.value = hour1Input.value;
                hour2OldInput.value =hour2Input.value;
                minute1OldInput.value = minute1Input.value;
                minute2OldInput.value = minute2Input.value;

                hour1Input.value = Math.floor(dateTime.getMinutes() / 10);
                hour2Input.value = dateTime.getMinutes() % 10;
                minute1Input.value = Math.floor(dateTime.getSeconds() / 10);
                minute2Input.value = dateTime.getSeconds() % 10;

                
                
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