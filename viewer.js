(function(){
var METAL_JPG_B64="data:image/jpeg;base64,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SCCCCSSRCF+2MZRRZZZZZRRQxj9xCESSQQQQSSSIQv2xjKKLLLLLKKKGMfuIQiSSSHDhy5ctNCN3+aMY3Tp27dlllFFDGP20IQiSSXLhw4cuWmmnu7u6223Tp27du3boooYx+4hCE5cuXDhw5ctNNPd3d1tunTp27dunTooYxj9xCEJy5cuXLmpqaVKlXXXXXXTp1VVVVVU6dOnTYxj95CE05cuXNTU1NTSpV1111106dVVVVVVVTp022MY/eQhNOXLmpqampqaVKlXXXXXTp3VVVVVVVOnTbYxj99NNNNOampqamlatWr7777du3buqqqqqptttsfsPxJppppqpqaVq1atX333327du3dVVNttttsfw00001SpUqVq1ffffffbt27dOnTbbbbH8TU0001SpUqVq++++++3bt06dNtttsftPyammmmqVKlXfffffffTp06dNtt638bTU001XXXXXXXXXXXXXTbe7vyN3d3rrrrrrrrrrrrrd3d+Vu7u7vXXXXXXXW7u787d3d3d3d3d3d+fu7u7u7u7u7v1N3d3d3dN+ru7u7v8Ain//xAAUEAEAAAAAAAAAAAAAAAAAAADA/9oACAEBAAM/AQAH/8QAGhABAQEBAQEBAAAAAAAAAAAAAAERECAwQP/aAAgBAQABPxD1fFX4VV+W+N/FvrW/C9vi/C8q+7e63u83xvx3zv1vb2r7qryqt5rea1vNa3ut7vd7vjfhrW/S+L4qryry1bzea1rea1vd7vd7rfGt+9+VVVXlVVq1rWta1rW81vNbzW93utb51rWt5v1zmLFizlXlVVWtWta1rWta1rWtbzW81rea1rflv0xjGLFixVVVVatWrWta1rWta1rWta1rWtb61rWta1vd84zuMYxjFixYsR0qqq1ata1rWta1rWta1rW91rWt5rWta1rW93s7nMYxjOLFixCOlVVq1ata1rWta1rWta1rWta1rWt+e+ZyJGJGM8CliEIR5Clq1a1rWta1rWta1rWtbzWta1rWta1rW+4iJEiRIzjOKUhCE+QpatWrWtbxvGta1rWta1rWta1rWta1rWtb4nYiJEiRJ4FLEISj0C1atWrWt43jWta1rWta1rWta1rWt7vda3zESJEiRIxiliEJT6/Slq1atbxrWta1rWta1rWta1rWta1rWtb6iIiJEiRIxixYhCff9KUt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";

var controls, camera, scene, renderer;
var cameraCube, sceneCube;
var textureEquirec, textureSphere;
var cubeMesh, sphereMesh;
var sphereMaterial;
function getThreeTextureFromURL(url){
  return new Promise(function(resolve, reject){
    var image = new Image();
    var texture = new THREE.Texture(image);
    image.onload = function(){
      texture.needsUpdate = true;
      resolve(texture);
    };
    image.onerror = function(error){
      reject(error);
    };
    image.src = url;
  })
}

function initThree(sphereTexture, inputEquirecTexture) {

  // CAMERAS

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
  camera.position.set(0, 0, 1000);
  cameraCube = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);

  // SCENE

  scene = new THREE.Scene();
  sceneCube = new THREE.Scene();

  // Lights

  var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);

  // Textures



  textureEquirec = inputEquirecTexture;
  textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
  textureEquirec.encoding = THREE.sRGBEncoding;

  textureSphere = sphereTexture;
  textureSphere.mapping = THREE.SphericalReflectionMapping;
  textureSphere.encoding = THREE.sRGBEncoding;

  // Materials

  var equirectShader = THREE.ShaderLib["equirect"];

  var equirectMaterial = new THREE.ShaderMaterial({
    fragmentShader: equirectShader.fragmentShader,
    vertexShader: equirectShader.vertexShader,
    uniforms: equirectShader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  });

  equirectMaterial.uniforms["tEquirect"].value = textureEquirec;
  // enable code injection for non-built-in material
  Object.defineProperty(equirectMaterial, 'map', {

    get: function () {

      return this.uniforms.tEquirect.value;

    }

  });

  /*
  var cubeShader = THREE.ShaderLib["cube"];
  var cubeMaterial = new THREE.ShaderMaterial({
    fragmentShader: cubeShader.fragmentShader,
    vertexShader: cubeShader.vertexShader,
    uniforms: cubeShader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  });

  cubeMaterial.envMap = textureCube;*/

  // Skybox

  cubeMesh = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 100, 100), equirectMaterial);
  sceneCube.add(cubeMesh);

  //

  var geometry = new THREE.SphereBufferGeometry(400.0, 48, 24);
  sphereMaterial = new THREE.MeshLambertMaterial({
    envMap: textureEquirec
  });
  sphereMesh = new THREE.Mesh(geometry, sphereMaterial);

  scene.add(sphereMesh);

  //

  renderer = new THREE.WebGLRenderer();
  renderer.autoClear = false;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("root").appendChild(renderer.domElement);

  renderer.outputEncoding = THREE.sRGBEncoding;

  //

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 2500;

  cubeMesh.material = equirectMaterial;
  cubeMesh.visible = true;
  sphereMaterial.envMap = textureEquirec;
  sphereMaterial.needsUpdate = true;

  textureEquirec.mapping = THREE.EquirectangularReflectionMapping;

  window.addEventListener('resize', onWindowResize, false);
  window.sphereMesh = sphereMesh;
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  cameraCube.aspect = window.innerWidth / window.innerHeight;
  cameraCube.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

  requestAnimationFrame(animate);

  render();

}

function render() {

  camera.lookAt(scene.position);
  cameraCube.rotation.copy(camera.rotation);

  renderer.render(sceneCube, cameraCube);
  renderer.render(scene, camera);

}
function getTextureForFile(inputFile) {
  var url = window.URL.createObjectURL(inputFile);
  return getThreeTextureFromURL(url)
  .then(function(texture){
    return texture;
  })
  .catch(function(error){
    throw error;
  })


}
function fileReadyHandler(files){
  window.fileHandlerUI.setDropZoneStatus(true, false);
  getTextureForFile(files[0])
  .then(function(userTexture){
    return getThreeTextureFromURL(METAL_JPG_B64)
    .then(function(metalTexture){
      initThree(metalTexture, userTexture);
      animate();
    })
  })
  .catch(function(error){
    console.error("ERROR: ",error);
  })

}
function initMainViewer() {
  window.fileHandlerUI.setFileHandler(fileReadyHandler);
}
initMainViewer();

})();