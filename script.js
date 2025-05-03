let bars = [];
let stack = [];
let queue = [];
let startTime, endTime;
let list = [];
let linkedList = null;
// Store original states for sorting algorithm comparison
let originalBarHeights = [];

// List Implementation
function addToList() {
    const randomHeight = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = randomHeight + "%";
    bar.textContent = randomHeight;
    
    // Add fixed width to ensure all nodes have the same size regardless of content
    bar.style.width = "50px"; // Fixed width
    bar.style.minWidth = "50px"; // Ensure minimum width
    bar.style.boxSizing = "border-box"; // Include padding in width calculation
    
    // Visual effect for adding
    bar.style.backgroundColor = "#4CAF50"; // Start with green color
    
    // Add to List
    list.push(bar);
    updateListVisualizer();
    
    // Animate the new element
    setTimeout(() => {
        bar.style.backgroundColor = "rgb(151, 188, 152)"; // Transition back to normal color
    }, 500);
    
    // Auto-scroll to the visualization area
    const listContainer = document.getElementById("list");
    listContainer.scrollIntoView({ behavior: "smooth" });
}

function removeFromList() {
    if (list.length > 0) {
        const bar = list.pop();
        const listContainer = document.getElementById("list");
        
        // Visual effect for removal
        bar.style.backgroundColor = "purple"; // Make removed element purple
        
        setTimeout(() => {
            listContainer.removeChild(bar); // Remove from visualizer
        }, 500);
    }
}

function updateListVisualizer() {
    const listContainer = document.getElementById("list");
    
    // Clear List content first
    listContainer.innerHTML = "";
    
    // Add empty message if list is empty
    if (list.length === 0) {
        const emptyMsg = document.createElement("div");
        emptyMsg.textContent = "List is empty";
        emptyMsg.style.color = "#888";
        emptyMsg.style.padding = "10px";
        listContainer.appendChild(emptyMsg);
        return;
    }
    
    // Container for index labels
    const indexContainer = document.createElement("div");
    indexContainer.classList.add("list-indices");
    indexContainer.style.display = "flex";
    indexContainer.style.justifyContent = "space-around";
    indexContainer.style.width = "100%";
    indexContainer.style.marginBottom = "5px";
    
    // Container for bars
    const barsContainer = document.createElement("div");
    barsContainer.classList.add("list-bars");
    barsContainer.style.display = "flex";
    barsContainer.style.justifyContent = "space-around";
    barsContainer.style.width = "100%";
    barsContainer.style.height = "200px";
    
    // Visualize each element in the List
    list.forEach((bar, index) => {
        // Add index label
        const indexLabel = document.createElement("div");
        indexLabel.textContent = index;
        indexLabel.style.width = "50px"; // Fixed width to match bars
        indexLabel.style.textAlign = "center";
        indexContainer.appendChild(indexLabel);
        
        // Add bar to container with fixed width
        const barClone = bar.cloneNode(true);
        barClone.style.width = "50px"; // Fixed width
        barClone.style.minWidth = "50px"; // Ensure minimum width
        barClone.style.boxSizing = "border-box"; // Include padding in width calculation
        barsContainer.appendChild(barClone);
    });
    
    listContainer.appendChild(indexContainer);
    listContainer.appendChild(barsContainer);
}

// LinkedList Implementation
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function addToLinkedList() {
    const randomHeight = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = randomHeight + "%";
    bar.textContent = randomHeight;
    
    // Add fixed width to ensure all nodes have the same size
    bar.style.width = "50px"; // Fixed width
    bar.style.minWidth = "50px"; // Ensure minimum width
    bar.style.boxSizing = "border-box"; // Include padding in width calculation
    
    bar.style.backgroundColor = "#4CAF50"; // Start with green color
    
    const newNode = new LinkedListNode(bar);
    
    if (!linkedList) {
        linkedList = newNode;
    } else {
        let current = linkedList;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    updateLinkedListVisualizer();
    
    // Animate the new element
    setTimeout(() => {
        bar.style.backgroundColor = "rgb(151, 188, 152)"; // Transition back to normal color
    }, 500);
    
    // Auto-scroll to the visualization area
    const linkedListContainer = document.getElementById("linkedList");
    linkedListContainer.scrollIntoView({ behavior: "smooth" });
}

function removeFromLinkedList() {
    if (linkedList) {
        const removedNode = linkedList;
        linkedList = linkedList.next;
        
        // Visual effect for removal
        removedNode.value.style.backgroundColor = "orange"; // Make removed element orange
        
        updateLinkedListVisualizer();
    }
}

function updateLinkedListVisualizer() {
    const linkedListContainer = document.getElementById("linkedList");
    linkedListContainer.innerHTML = ""; // Clear LinkedList content first
    
    // Add empty message if list is empty
    if (!linkedList) {
        const emptyMsg = document.createElement("div");
        emptyMsg.textContent = "Linked List is empty";
        emptyMsg.style.color = "#888";
        emptyMsg.style.padding = "10px";
        linkedListContainer.appendChild(emptyMsg);
        return;
    }
    
    // Create a visual container for the linked list
    const listContainer = document.createElement("div");
    listContainer.style.display = "flex";
    listContainer.style.alignItems = "center";
    listContainer.style.overflowX = "auto";
    listContainer.style.width = "100%";
    listContainer.style.padding = "10px 0";
    
    // Visualize each node in the LinkedList
    let current = linkedList;
    let nodeIndex = 0;
    
    while (current) {
        // Create node container
        const nodeContainer = document.createElement("div");
        nodeContainer.classList.add("node-container");
        nodeContainer.style.display = "flex";
        nodeContainer.style.flexDirection = "column";
        nodeContainer.style.alignItems = "center";
        nodeContainer.style.marginRight = "10px";
        nodeContainer.style.width = "50px"; // Fixed width
        nodeContainer.style.minWidth = "50px"; // Ensure minimum width
        
        // Add index label
        const indexLabel = document.createElement("div");
        indexLabel.textContent = nodeIndex;
        indexLabel.style.marginBottom = "5px";
        nodeContainer.appendChild(indexLabel);
        
        // Add bar
        const barContainer = document.createElement("div");
        barContainer.style.height = "150px";
        barContainer.style.width = "50px"; // Fixed width
        barContainer.style.display = "flex";
        barContainer.style.flexDirection = "column-reverse";
        
        // Ensure the bar itself has fixed dimensions
        const barClone = current.value.cloneNode(true);
        barClone.style.width = "50px"; // Fixed width
        barClone.style.minWidth = "50px"; // Ensure minimum width
        barClone.style.boxSizing = "border-box"; // Include padding in width calculation
        
        barContainer.appendChild(barClone);
        nodeContainer.appendChild(barContainer);
        
        // Add to the list container
        listContainer.appendChild(nodeContainer);
        
        // Add arrow if there's a next node
        if (current.next) {
            const arrow = document.createElement("div");
            arrow.innerHTML = "→";
            arrow.style.fontSize = "24px";
            arrow.style.margin = "0 5px";
            arrow.style.alignSelf = "center";
            listContainer.appendChild(arrow);
        }
        
        current = current.next;
        nodeIndex++;
    }
    
    // Add head pointer
    const headLabel = document.createElement("div");
    headLabel.textContent = "Head";
    headLabel.style.position = "absolute";
    headLabel.style.top = "-20px";
    headLabel.style.left = "10px";
    headLabel.style.fontWeight = "bold";
    headLabel.style.color = "#3498db";
    
    // Add the linked list to the container
    linkedListContainer.style.position = "relative";
    linkedListContainer.appendChild(headLabel);
    linkedListContainer.appendChild(listContainer);
}

window.onload = function() {
    createBars();
    
    // Add containers for List visualization if not already in HTML
    if (!document.getElementById("listVisualizer")) {
        const listVisualizer = document.createElement("div");
        listVisualizer.id = "listVisualizer";
        const listHeader = document.createElement("h3");
        listHeader.textContent = "List (Array)";
        const listContainer = document.createElement("div");
        listContainer.id = "list";
        listContainer.style.minHeight = "250px";
        listContainer.style.width = "600px";
        listContainer.style.border = "1px solid #ccc";
        listContainer.style.padding = "10px";
        listContainer.style.marginBottom = "20px";
        listContainer.style.backgroundColor = "#fff";
        
        listVisualizer.appendChild(listHeader);
        listVisualizer.appendChild(listContainer);
        
        // Add List buttons if not already in controls
        const controlsContainer = document.getElementById("controls");
        
        // Insert list visualizer before linkedList visualizer
        const linkedListVisualizer = document.getElementById("linkedListVisualizer");
        document.body.insertBefore(listVisualizer, linkedListVisualizer);
        
        // Add list control buttons if not in HTML
        if (!document.querySelector('button[onclick="addToList()"]')) {
            const addListBtn = document.createElement("button");
            addListBtn.textContent = "Add to List";
            addListBtn.onclick = addToList;
            
            const removeListBtn = document.createElement("button");
            removeListBtn.textContent = "Remove from List";
            removeListBtn.onclick = removeFromList;
            
            controlsContainer.appendChild(addListBtn);
            controlsContainer.appendChild(removeListBtn);
        }
    }
    
    // Update visualizers to show initial state
    updateListVisualizer();
    updateLinkedListVisualizer();
    
    // Show dynamic fields when graph button is clicked
    document.getElementById("graphButton").addEventListener("click", function() {
        const graphInputs = document.getElementById("graphInputs");
        if (graphInputs.style.display === "none" || graphInputs.style.display === "") {
            graphInputs.style.display = "block";
        } else {
            graphInputs.style.display = "none";
        }
    });

    // Graph creation
    document.getElementById("generateGraph").addEventListener("click", function() {
        const verticesInput = document.getElementById("vertices").value;
        const edgesInput = document.getElementById("edges").value;
        parseAndCreateGraph(verticesInput, edgesInput);
    });
    
    // Set initial complexity
    updateComplexity();
};

// Parse and create graph from user input format: V={1,2,3,4,5} E={(1,2),(2,4),(3,1)}
function parseAndCreateGraph(verticesStr, edgesStr) {
    try {
        // Parse vertices
        let vertices = [];
        
        // Check if input is in the format V={1,2,3,...}
        if (verticesStr.includes("{") && verticesStr.includes("}")) {
            const vertexMatch = verticesStr.match(/{([^}]*)}/);
            if (vertexMatch && vertexMatch[1]) {
                vertices = vertexMatch[1].split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v));
            }
        } else {
            // If just a number is entered, create vertices 1 to n
            const vertexCount = parseInt(verticesStr);
            if (!isNaN(vertexCount)) {
                for (let i = 1; i <= vertexCount; i++) {
                    vertices.push(i);
                }
            }
        }
        
        // Parse edges
        let edges = [];
        
        // Check if input is in the format E={(1,2),(2,4),...}
        if (edgesStr.includes("{") && edgesStr.includes("}")) {
            const edgesMatch = edgesStr.match(/{([^}]*)}/);
            if (edgesMatch && edgesMatch[1]) {
                const edgePairs = edgesMatch[1].match(/\((\d+),(\d+)\)/g);
                if (edgePairs) {
                    edges = edgePairs.map(pair => {
                        const nums = pair.match(/\((\d+),(\d+)\)/);
                        return [parseInt(nums[1]), parseInt(nums[2])];
                    });
                }
            }
        } else {
            // If just a number is entered, create random edges
            const edgeCount = parseInt(edgesStr);
            if (!isNaN(edgeCount) && vertices.length > 0) {
                for (let i = 0; i < edgeCount; i++) {
                    const start = vertices[Math.floor(Math.random() * vertices.length)];
                    const end = vertices[Math.floor(Math.random() * vertices.length)];
                    if (start !== end) {
                        edges.push([start, end]);
                    }
                }
            }
        }
        
        if (vertices.length > 0) {
            console.log("Creating graph with vertices:", vertices);
            console.log("Edges:", edges);
            createGraphVisualization(vertices, edges);
        } else {
            alert("Please enter valid vertices");
        }
    } catch (error) {
        console.error("Error parsing graph input:", error);
        alert("Invalid input format. Please use format like V={1,2,3,4,5} E={(1,2),(2,4),(3,1)}");
    }
}

// Create visual representation of the graph
function createGraphVisualization(vertices, edges) {
    const container = document.getElementById("graphContainer");
    container.innerHTML = ""; // Clear existing graph
    
    // Create a container for the actual graph visualization
    const graphVisual = document.createElement("div");
    graphVisual.id = "graphVisual";
    graphVisual.style.position = "relative";
    graphVisual.style.width = "600px";
    graphVisual.style.height = "400px";
    graphVisual.style.border = "2px solid #333";
    graphVisual.style.margin = "20px auto";
    graphVisual.style.background = "#f9f9f9";
    container.appendChild(graphVisual);
    
    // Display vertex and edge information
    const infoDiv = document.createElement("div");
    infoDiv.style.margin = "10px";
    infoDiv.innerHTML = `<strong>Vertices:</strong> {${vertices.join(",")}} <br> <strong>Edges:</strong> {${edges.map(e => `(${e[0]},${e[1]})`).join(",")}}`;
    container.appendChild(infoDiv);
    
    // Calculate positions for vertices (in a circle)
    const vertexPositions = {};
    const centerX = 300;
    const centerY = 200;
    const radius = 150;
    
    vertices.forEach((v, i) => {
        const angle = (i / vertices.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        vertexPositions[v] = { x, y };
    });
    
    // Draw edges (lines)
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    graphVisual.appendChild(svg);
    
    // Draw edges first (so they appear behind vertices)
    edges.forEach(([start, end]) => {
        if (vertexPositions[start] && vertexPositions[end]) {
            const line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", vertexPositions[start].x);
            line.setAttribute("y1", vertexPositions[start].y);
            line.setAttribute("x2", vertexPositions[end].x);
            line.setAttribute("y2", vertexPositions[end].y);
            line.setAttribute("stroke", "#666");
            line.setAttribute("stroke-width", "2");
            
            // Add directional arrow
            const marker = document.createElementNS(svgNS, "marker");
            const markerId = `arrow-${start}-${end}`;
            marker.setAttribute("id", markerId);
            marker.setAttribute("viewBox", "0 0 10 10");
            marker.setAttribute("refX", "5");
            marker.setAttribute("refY", "5");
            marker.setAttribute("markerWidth", "6");
            marker.setAttribute("markerHeight", "6");
            marker.setAttribute("orient", "auto-start-reverse");
            
            const arrow = document.createElementNS(svgNS, "path");
            arrow.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
            arrow.setAttribute("fill", "#666");
            marker.appendChild(arrow);
            
            svg.appendChild(marker);
            line.setAttribute("marker-end", `url(#${markerId})`);
            svg.appendChild(line);
        }
    });
    
    // Draw vertices (circles with text)
    vertices.forEach(v => {
        if (vertexPositions[v]) {
            const vertex = document.createElement("div");
            vertex.classList.add("vertex");
            vertex.textContent = v;
            vertex.style.position = "absolute";
            vertex.style.left = (vertexPositions[v].x - 20) + "px";
            vertex.style.top = (vertexPositions[v].y - 20) + "px";
            vertex.style.width = "40px";
            vertex.style.height = "40px";
            vertex.style.borderRadius = "50%";
            vertex.style.backgroundColor = "#4CAF50";
            vertex.style.color = "white";
            vertex.style.textAlign = "center";
            vertex.style.lineHeight = "40px";
            vertex.style.fontWeight = "bold";
            graphVisual.appendChild(vertex);
        }
    });
}

function addToStack() {
    const randomHeight = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = randomHeight + "%";
    bar.textContent = randomHeight; // Value inside the bar

    // Add to stack and update visualizer
    stack.push(bar);
    updateStackVisualizer();
}

function removeFromStack() {
    if (stack.length > 0) {
        // Remove last element
        const bar = stack.pop();
        bar.style.backgroundColor = "red"; // Make removed element red
        setTimeout(() => {
            bar.remove(); // Remove from visualizer
            updateStackVisualizer();
        }, 500);
    }
}

function addToQueue() {
    const randomHeight = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = randomHeight + "%";
    bar.textContent = randomHeight; // Value inside the bar

    // Add to queue
    queue.push(bar);
    updateQueueVisualizer();
}

function removeFromQueue() {
    if (queue.length > 0) {
        const bar = queue.shift(); // Remove first element
        bar.style.backgroundColor = "red"; // Make removed element blue
        setTimeout(() => {
            bar.remove(); // Remove from visualizer
            updateQueueVisualizer();
        }, 500);
    }
}

function updateStackVisualizer() {
    const stackContainer = document.getElementById("stack");
    stackContainer.innerHTML = ""; // Clear stack content first

    // Visualize each element in the stack
    stack.forEach(bar => {
        stackContainer.appendChild(bar);
    });
}

// Update queue visualizer
function updateQueueVisualizer() {
    const queueContainer = document.getElementById("queue");
    queueContainer.innerHTML = ""; // Clear queue content first

    // Visualize each element in the queue
    queue.forEach(bar => {
        queueContainer.appendChild(bar);
    });
}

function createBars() {
    const container = document.getElementById("visualizer");
    container.innerHTML = "";
    let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    
    // Store the original state
    originalBarHeights = [...numbers];
    
    bars = numbers.map(num => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = num + "%";
        container.appendChild(bar);
        return bar;
    });
}

function resetTime() {
    startTime = null;
    endTime = null;
    document.getElementById("time").innerText = "Time Taken: 0 ms"; // Reset time
}

// Reset to original state before running a sorting algorithm
function resetToOriginalState() {
    if (originalBarHeights.length === 0) return; // Safety check
    
    const container = document.getElementById("visualizer");
    container.innerHTML = "";
    
    bars = originalBarHeights.map(num => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = num + "%";
        bar.style.background = "blue"; // Reset color
        container.appendChild(bar);
        return bar;
    });
}

async function bubbleSort() {
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            bars[j].style.background = "red"; // Make compared elements red
            bars[j + 1].style.background = "red";

            await new Promise(resolve => setTimeout(resolve, 300)); // Wait time

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);

            if (height1 > height2) {
                // Swap
                [bars[j].style.height, bars[j + 1].style.height] = [bars[j + 1].style.height, bars[j].style.height];
            }

            bars[j].style.background = "blue"; // Reset colors
            bars[j + 1].style.background = "blue";
        }
        bars[len - i - 1].style.background = "green"; // Mark sorted elements as green
    }
    bars[0].style.background = "green"; // Mark last element as green
}

async function selectionSort() {
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        bars[minIndex].style.background = "red"; // Mark minimum element

        for (let j = i + 1; j < len; j++) {
            bars[j].style.background = "yellow"; // Mark compared element as yellow
            await new Promise(resolve => setTimeout(resolve, 300));

            let height1 = parseInt(bars[minIndex].style.height);
            let height2 = parseInt(bars[j].style.height);

            if (height2 < height1) {
                bars[minIndex].style.background = "blue"; // Reset previous minimum color
                minIndex = j;
                bars[minIndex].style.background = "red"; // Mark new minimum
            } else {
                bars[j].style.background = "blue"; // Reset compared element color
            }
        }

        if (minIndex !== i) {
            [bars[i].style.height, bars[minIndex].style.height] = [bars[minIndex].style.height, bars[i].style.height];
        }

        bars[i].style.background = "green"; // Mark sorted element as green
    }
    bars[len - 1].style.background = "green"; // Mark last element as green
}

async function mergeSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively call mergeSort for left and right halves
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);

        // Merge
        await merge(arr, left, mid, right);
    }
}

async function merge(arr, left, mid, right) {
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    // Compare and merge left and right arrays
    while (i < leftArr.length && j < rightArr.length) {
        if (parseInt(leftArr[i].style.height) <= parseInt(rightArr[j].style.height)) {
            arr[k].style.background = "yellow"; // Mark compared element
            await new Promise(resolve => setTimeout(resolve, 300)); // Animation delay
            arr[k].style.background = "blue"; // Reset color
            arr[k].style.height = leftArr[i].style.height; // Take element from left array
            i++;
        } else {
            arr[k].style.background = "yellow"; // Mark compared element
            await new Promise(resolve => setTimeout(resolve, 300)); // Animation delay
            arr[k].style.background = "blue"; // Reset color
            arr[k].style.height = rightArr[j].style.height; // Take element from right array
            j++;
        }
        k++;
    }

    // Take remaining elements from left array
    while (i < leftArr.length) {
        arr[k].style.background = "yellow";
        await new Promise(resolve => setTimeout(resolve, 300));
        arr[k].style.background = "blue";
        arr[k].style.height = leftArr[i].style.height;
        i++;
        k++;
    }

    // Take remaining elements from right array
    while (j < rightArr.length) {
        arr[k].style.background = "yellow";
        await new Promise(resolve => setTimeout(resolve, 300));
        arr[k].style.background = "blue";
        arr[k].style.height = rightArr[j].style.height;
        j++;
        k++;
    }

    // Mark sorted elements as green
    for (let i = left; i <= right; i++) {
        arr[i].style.background = "green";
    }
}

async function quickSort(low = 0, high = bars.length - 1) {
    if (low < high) {
        let pivotIndex = await partition(low, high);
        await quickSort(low, pivotIndex - 1);
        await quickSort(pivotIndex + 1, high);
    }

    // Mark all elements as green after sorting
    if (low === 0 && high === bars.length - 1) {
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.background = "green";
        }
    }
}

async function partition(low, high) {
    let pivot = parseInt(bars[high].style.height);
    bars[high].style.background = "red"; // Mark pivot as red
    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.background = "yellow"; // Mark compared element as yellow
        await new Promise(resolve => setTimeout(resolve, 300));

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
            bars[i].style.background = "blue"; // Mark swapped element as blue
        }
        bars[j].style.background = "blue"; // Reset compared element color
    }

    [bars[i + 1].style.height, bars[high].style.height] = [bars[high].style.height, bars[i + 1].style.height];
    bars[high].style.background = "blue"; // Reset pivot color
    bars[i + 1].style.background = "green"; // Mark pivot in correct position as green

    return i + 1;
}

document.getElementById("algorithm").addEventListener("change", updateComplexity);

function updateComplexity() {
    let algorithm = document.getElementById("algorithm").value;
    let complexityDisplay = document.getElementById("complexity");

    let complexities = {
        "bubbleSort": "O(n²)",
        "selectionSort": "O(n²)",
        "quickSort": "O(n log n) (Average), O(n²) (Worst Case)",
        "mergeSort": "O(n log n)"
    };

    complexityDisplay.innerText = `Time Complexity: ${complexities[algorithm]}`;
}

async function startSort() {
    // Reset to original state before sorting
    resetToOriginalState();
    
    updateComplexity();
    
    let algorithm = document.getElementById("algorithm").value;
    let timeDisplay = document.getElementById("time");
    
    let startTime = performance.now(); // Start time
    
    if (algorithm === "bubbleSort") {
        await bubbleSort();
    } else if (algorithm === "selectionSort") {
        await selectionSort();
    } else if (algorithm === "quickSort") {
        await quickSort(0, bars.length - 1);
    } else if (algorithm === "mergeSort") {
        await mergeSort(bars, 0, bars.length - 1);
    }
    
    let endTime = performance.now();
    let timeTaken = (endTime - startTime).toFixed(2); // Calculate time
    
    timeDisplay.innerText = `Time Taken: ${timeTaken} ms`;
}

function resetBars() {
    createBars();
    resetTime();
    stack = [];
    queue = [];
    list = [];
    linkedList = null;
    updateStackVisualizer();
    updateQueueVisualizer();
    updateListVisualizer();
    updateLinkedListVisualizer();
    
    // Clear graph container
    const graphContainer = document.getElementById("graphContainer");
    if (graphContainer) {
        graphContainer.innerHTML = "";
    }
}