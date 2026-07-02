import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

export function initControls(camera,renderer){

    const controls=new PointerLockControls(camera,document.body);

    document.body.addEventListener("click",()=>{

        controls.lock();

    });

    return controls;

}