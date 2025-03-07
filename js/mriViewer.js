window.onload = function() {
    const loader = new AMI.VolumeLoader();
    const fileURL = '../../assets/MRI.nii';

    loader.load([fileURL]).then((series) => {
        const stack = series[0].stack[0];

        createViewer('axial-viewer', stack, 'axial');
        createViewer('coronal-viewer', stack, 'coronal');
        createViewer('sagittal-viewer', stack, 'sagittal');
    }).catch((err) => {
        console.error("Erreur de chargement de l'IRM:", err);
    });

    function createViewer(containerId, stack, orientation) {
        const container = document.getElementById(containerId);

        const renderer = new AMI.Renderer2D(container);
        renderer.orientation = orientation;

        const scene = new THREE.Scene();
        renderer.init();

        const stackHelper = new AMI.StackHelper(stack);
        stackHelper.orientation = renderer.orientation;
        scene.add(stackHelper);

        const camera = renderer.camera;
        const controls = new AMI.TrackballOrthoControl(camera, container);
        controls.staticMoving = true;
        controls.noRotate = true;

        function animate() {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        container.addEventListener('wheel', (event) => {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            stackHelper.index += delta;
        });
    }
};
