var vertexShaderText = 
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'uniform glMatrix.mat4 mWorld;',
'uniform glMatrix.mat4 mView;',
'uniform glMatrix.mat4 mProj;',
'',
'void main()',
'{',
' fragColor = vertColor;',
'	gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
'}'
].join('\n');

var fragmentShaderText = 
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
'	gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

main();

		//
		// start here
		//
function main() {
  	var canvas = document.getElementById("surface");
  	// Initialize the GL context
  	var gl = canvas.getContext("webgl");

  	// Only continue if WebGL is available and working
  	if (!gl) {
    	alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    	return;
  	}

  	// Set clear color to black, fully opaque
  	gl.clearColor(0.4, 0.6, 0.5, 1.0);
  	// Clear the color buffer with specified clear color
  	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  	gl.shaderSource(vertexShader, vertexShaderText);
  	gl.shaderSource(fragmentShader, fragmentShaderText);

  	gl.compileShader(vertexShader);
  	gl.compileShader(fragmentShader);

  	var program = gl.createProgram();
  	gl.attachShader(program, vertexShader);
  	gl.attachShader(program, fragmentShader);
  	gl.linkProgram(program);

		  //
		  //Búa til buffer
		  //
  	var triangleVerticies = 
  	[
  		0.0, 0.5,, 0.0,    1.0, 1.0, 0.0,
  		-0.5, -0.5, 0.0,   0.7, 0.0, 1.0,
  		0.5, -0.5, 0.0,    0.1, 1.0, 0.6
  	];

  	var triangleVertexBufferObject = gl.createBuffer();
  	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
  	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVerticies), gl.STATIC_DRAW);

  	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
    var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
  	gl.vertexAttribPointer(
		  positionAttribLocation,
  		3,
  		gl.FLOAT,
  		gl.FALSE,
  		6 * Float32Array.BYTES_PER_ELEMENT,
  		0);

    gl.vertexAttribPointer(
      colorAttribLocation,
      3,
      gl.FLOAT,
      gl.FALSE,
      6 * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT);

  	gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(colorAttribLocation);

    gl.useProgram(program);

    var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
    var matViewUniformLocation = gl.getUniformLocation(program, 'mView');
    var matProjUniformLocation = gl.getUniformLocation(program, 'mProj');

    var worldMatrix = new Float32Array(16);
    var viewMatrix = new Float32Array(16);
    var projMatrix = new Float32Array(16);

    glMatrix.mat4.identity(worldMatrix);
    glMatrix.mat4.identity(viewMatrix);
    glMatrix.mat4.identity(projMatrix);

    gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
    gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
    gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);


  	//Main render loop
  	gl.drawArrays(gl.TRIANGLES, 0, 3);

};