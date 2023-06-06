// Variables
const pomoBtn = document.getElementById("pomo-btn"); // object
const matrixBtn = document.getElementById("matrix-btn"); //object
const ztdBtn = document.getElementById("ztd-btn"); //object
const gtdBtn = document.getElementById("gtd-btn"); //object
const taskType = document.getElementById("task-type");
const resetBtnEl = document.getElementById("reset-btn");

// define variable
const taskPromptTextEl = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");

// ====================================================================================
// Reset Functions

// when I click the :start over: btn
resetBtnEl.addEventListener("click", () => resetPage());

// ResetPage function
function resetPage() {
  // set the value of the web view to nothing
  taskPromptResultEl.innerHTML = "";
  // set the content of the textarea to nothing
  taskPromptTextEl.value = "";
}

// ====================================================================================
// Update Result

const updateResult = () => {
  // get the value of the select
  const taskTypeValue = taskType.value;
  // console.log(taskTypeValue);
  // update the result
  switch (taskTypeValue) {
    case "Pomodoro":
      generateTaskOption("Pomodoro");
      break;
    case "ZTD":
      generateTaskOption("ZTD");
      break;
    case "Matrix":
      generateTaskOption("Matrix");
      break;
    case userInput:
      generateUserOption(userInput);
    default:
      generateTaskOption();
      break;
  }
};

// inner.html Replacement | Update Results
taskType.addEventListener("change", () => updateResult());

function generateTaskOption(type = "Pomodoro") {
  taskPromptResultEl.innerHTML = `
    <!-- start: second section-->
        <div class="p-6">
          <p class="text-4xl">Here's your plan based on ${type} technique</p>
        </div>
        <!-- end: second section-->

        <!-- start: 3rd section -->
        <div class="p-6 bg-gray-200">
          <p>
            Here are some things you can do to get started. You can also add your own tasks. 
          </p>
          <div class="section-btn">
            <p>generate full things to do.</p>
          </div>
          <div class="section-btn">
            <p>suggest something</p>
          </div>

          <div class="section-btn flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Generate another variant</p>
          </div>
          <!-- section navigation -->
          <!-- block-level e.g div, p, img, etc. -->
          <div class="flex justify-between">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <!-- inline-level -->
            <strong>1/2</strong>
          </div>
        </div>
        <!-- end: 3rd section -->
    `;
}

function generateUserOption(type) {
  taskPromptResultEl.innerHTML = `
    <!-- start: second section-->
        <div class="p-6">
          <p class="text-4xl">Here are some options based on your personal input: "${type}"</p>
        </div>
        <!-- end: second section-->

        <!-- start: 3rd section -->
        <div class="p-6 bg-gray-200">
          <p>
            Choose some starting points
          </p>
          <div class="section-btn">
            <p>Generate new ideas.</p>
          </div>
          <div class="section-btn">
            <p>suggest something</p>
          </div>
          <div class="section-btn">
            <p>Make a list</p>
          </div>
          <div class="section-btn">
            <p>Give an example</p>
          </div>

          <div class="section-btn flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Generate another variant</p>
          </div>
          <!-- section navigation -->
          <!-- block-level e.g div, p, img, etc. -->
          <div class="flex justify-between">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <!-- inline-level -->
            <strong>1/2</strong>
          </div>
        </div>
        <!-- end: 3rd section -->
    `;
}

// ====================================================================================
// Text-Input

// Text prompt
taskPromptTextEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // get a value
    // console.log();
    const userInput = taskPromptTextEl.value;
    //@TODO: 1. make this show in the web view
    console.log(userInput);
    //    set a value
    taskPromptTextEl.value = "";

    generateUserOption(userInput);
  }
});

// ====================================================================================
// Button-Input

// Pomodoro
pomoBtn.addEventListener("click", function () {
  generateTaskOption("Pomodoro");
});

// Matrix
matrixBtn.addEventListener("click", function () {
  generateTaskOption("Matrix");
});

// ZTD
ztdBtn.addEventListener("click", function () {
  generateTaskOption();
});

// GTD
gtdBtn.addEventListener("click", function () {
  generateTaskOption("GTD");
});

// ====================================================================================
// task switcher | Old COde

// taskType.addEventListener("change", function (event) {
//   switch (event.target.value) {
//     case "Pomodoro":
//       generateTaskOption("Pomodoro");
//       break;
//     case "ZTD":
//       generateTaskOption("ZTD");
//       break;
//     case "Matrix":
//       generateTaskOption("Matrix");
//       break;
//     default:
//       generateTaskOption();
//       break;
//   }
// });
