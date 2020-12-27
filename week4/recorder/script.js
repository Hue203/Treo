// Global variables to save all the HTML elements we will use later
let audioElement = document.getElementById('audio');
let recordButton = document.getElementById('record-button');
let stopButton = document.getElementById('stop-button');
stopButton.disabled = true;

//Global variable to save the recording chunks
let chunks = [];

//Global variable to control the recorder
let recorder = null;

//
const main = async () => {
	//Get the browser's audio input as stream
	let stream = await navigator.mediaDevices.getUserMedia({ audio: true });

	//Create a recorder for that stream
	recorder = new MediaRecorder(stream);

	// Add event listeners to the record and stop button
	recordButton.addEventListener('click', startRecording);
	stopButton.addEventListener('click', stopRecording);

	// Once the data is available, we will run the saveCurrentRecording function
	recorder.ondataavailable = saveCurrentRecording;

	// Once the recorder is stopped, we will convert the trunks into mp4
	recorder.onstop = sendToMediaPlayer;
};

// Save the current data to chunks
const saveCurrentRecording = (event) => {
	chunks.push(event.data);
	console.log(chunks);
};

// Ignore this function
const sendToMediaPlayer = () => {
	const blob = new Blob(chunks, {
		type: 'audio/mp4; codecs=opus',
	});
	const url = URL.createObjectURL(blob);
	audioElement.setAttribute('src', url);

	//clear the recorded chunks if preferred
	// chunks = [];
};

const startRecording = () => {
	recorder.start();
	recordButton.style.border = '1px solid red';
	recordButton.innerHTML = 'Recording';
	recordButton.disabled = true;
	stopButton.disabled = false;
};

const stopRecording = () => {
	recorder.stop();
	recordButton.style.border = '1px solid gray';
	recordButton.innerHTML = 'Record';
	recordButton.disabled = false;
	stopButton.disabled = true;
};

main();
