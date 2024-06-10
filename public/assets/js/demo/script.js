var jsonUrls = JSON.parse("<json>");

function convertToRegex(url) {
    // Replace placeholders like {meeting_id} with a regex pattern to match any value
    return new RegExp("^" + url.replace(/{[^}]+}/g, "[^/]+") + "$");
}

function checkUrlRoleMapping() {
    var currentUrl = window.location.href;
    console.log(jsonUrls);

    // Convert URLs in jsonUrls to regex patterns
    var regexMappings = jsonUrls.map((mapping) => ({
        ...mapping,
        regex: convertToRegex(mapping.url),
    }));

    for (var i = 0; i < regexMappings.length; i++) {
        var mapping = regexMappings[i];
        if (mapping.regex.test(currentUrl) && mapping.event_type === "view") {
            console.log("This is view event on page load");

            // Function to load the script dynamically
            function loadScript(url, callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;

                // Execute the callback function after the script is loaded
                script.onload = callback;

                // Append the script element to the document's head
                document.head.appendChild(script);
            }

            // Callback function to execute after the script is loaded
            function scriptLoaded() {
                // Now you can use window.tracker safely
                console.log("Script loaded successfully");
                window.tracker.track(mapping.event_name, {
                    Type: mapping.event_type,
                    Role: mapping.role,
                    Action: mapping.action,
                });
            }

            // Load the script dynamically
            loadScript(
                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                scriptLoaded
            );
        }
    }

    // Keep track of clicked buttons
    var clickedButtons = new Set();

    // Find objects with a matching URL
    regexMappings.forEach(function (item) {
        if (item.regex.test(currentUrl) && item.event_type === "click") {
            // Check if button_id is not already clicked
            if (!clickedButtons.has(item.button_id)) {
                // Get the button element by id
                var button = document.getElementById(item.button_id);

                // Add event listener if button exists
                if (button) {
                    button.addEventListener("click", function () {
                        // Check if the button has already been clicked
                        if (!clickedButtons.has(item.button_id)) {
                            // Add the button ID to the set of clicked buttons
                            clickedButtons.add(item.button_id);

                            // Function to load the script dynamically
                            function loadScript(url, callback) {
                                var script = document.createElement("script");
                                script.type = "text/javascript";
                                script.src = url;

                                // Execute the callback function after the script is loaded
                                script.onload = callback;

                                // Append the script element to the document's head
                                document.head.appendChild(script);
                            }

                            // Callback function to execute after the script is loaded
                            function scriptLoaded() {
                                // Now you can use window.tracker safely
                                console.log("Script loaded successfully");
                                window.tracker.track(item.event_name, {
                                    Type: item.event_type,
                                    Role: item.role,
                                    Action: item.action,
                                });
                            }

                            // Load the script dynamically
                            loadScript(
                                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                                scriptLoaded
                            );

                            // Perform actions when button is clicked
                            console.log("Button clicked:", item);
                        }
                    });
                }
            }
        }

        if (item.regex.test(currentUrl) && item.event_type === "submit") {
            // Check if button_id is not already clicked
            if (!clickedButtons.has(item.button_id)) {
                // Get the button element by id
                var button = document.getElementById(item.button_id);

                // Add event listener if button exists
                if (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();

                        // Find the parent form of the clicked button
                        var form = button.closest("form");
                        var formData = {};

                        // Iterate over each element in the form
                        Array.from(form.elements).forEach(function (element) {
                            // Skip elements that do not have a name or are not inputs, selects, or textareas
                            if (
                                element.name &&
                                (element.tagName === "INPUT" ||
                                    element.tagName === "SELECT" ||
                                    element.tagName === "TEXTAREA")
                            ) {
                                formData[element.name] = element.value;
                            }
                        });
                        console.log("Form Data:", formData);

                        // Check if the button has already been clicked
                        if (!clickedButtons.has(item.button_id)) {
                            // Add the button ID to the set of clicked buttons
                            clickedButtons.add(item.button_id);

                            // Function to load the script dynamically
                            function loadScript(url, callback) {
                                var script = document.createElement("script");
                                script.type = "text/javascript";
                                script.src = url;

                                // Execute the callback function after the script is loaded
                                script.onload = callback;

                                // Append the script element to the document's head
                                document.head.appendChild(script);
                            }

                            // Callback function to execute after the script is loaded
                            function scriptLoaded() {
                                // Now you can use window.tracker safely
                                console.log("Script loaded successfully");
                                window.tracker.track(item.event_name, {
                                    Type: item.event_type,
                                    Role: item.role,
                                    Action: item.action,
                                    FormData: formData,
                                });
                            }

                            // Load the script dynamically
                            loadScript(
                                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                                scriptLoaded
                            );

                            // Perform actions when button is clicked
                            console.log("Button clicked:", item);
                        }
                    });
                }
            }
        }
    });
    console.log("No matching role found for URL: " + currentUrl);
}

checkUrlRoleMapping();

// var url = "<APP-URL>/assets/json/<domain-name>.json";

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         jsonUrls = data;
//         console.log(data);
//         checkUrlRoleMapping();
//     })
//     .catch((error) => {
//         console.error("Error fetching JSON:", error);
//     });

// Function to check if event origin exists in JSON data URLs
function isEventOriginInJsonData(eventOrigin) {
    // Check if event origin exists in any of the URLs in JSON data
    return jsonUrls.some((item) => item.url.startsWith(eventOrigin));
}
// Function to handle messages from child apps
function handleMessageFromChild(event) {
    const messageData = event.data;
    // Check if the message is from an allowed origin
    if (isEventOriginInJsonData(window.location.href)) {
        // Extract message data from the event

        // Check if the message is of interest (e.g., based on type)
        if (messageData.type === "FormSubmit") {
            // Process the message data
            console.log(
                "Received message from child:",
                window.location.href,
                "-------- origin"
            );
            function loadScript(url, callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;

                // Execute the callback function after the script is loaded
                script.onload = callback;

                // Append the script element to the document's head
                document.head.appendChild(script);
            }

            // Callback function to execute after the script is loaded
            function scriptLoaded() {
                console.log("Script loaded successfully");
                window.tracker.track("Form submit event", {
                    FormData: event.data,
                });
            }

            loadScript("<APP-URL>/assets/js/test.tracardi.js", scriptLoaded);
        }
    } else {
        console.log("Event origin is not allowed:", window.location.href);
    }
}
// Listen for messages from child apps
window.addEventListener("message", handleMessageFromChild);
