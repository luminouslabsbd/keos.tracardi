var jsonUrls = JSON.parse("<json>");

function convertToRegex(url) {
    return new RegExp("^" + url.replace(/{[^}]+}/g, "[^/]+") + "$");
}

function checkUrlRoleMapping() {
    var currentUrl = window.location.href;
    console.log(jsonUrls);

    var regexMappings = jsonUrls.map((mapping) => ({
        ...mapping,
        regex: convertToRegex(mapping.url),
    }));

    for (var i = 0; i < regexMappings.length; i++) {
        var mapping = regexMappings[i];
        if (mapping.regex.test(currentUrl) && mapping.event_type === "view") {
            console.log("This is view event on page load");

            function loadScript(url, callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.onload = callback;
                document.head.appendChild(script);
            }

            function scriptLoaded() {
                console.log("Script loaded successfully");
                window.tracker.track(mapping.event_name, {
                    Type: mapping.event_type,
                    Role: mapping.role,
                    Action: mapping.action,
                });
            }

            loadScript(
                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                scriptLoaded
            );
        } else if (
            mapping.regex.test(currentUrl) &&
            mapping.event_type === "record-activity"
        ) {
            let eventLog = [];
            const eventsToTrack = [
                "click",
                "dblclick",
                "mousedown",
                "mouseup",
                "mousemove",
                "mouseover",
                "mouseout",
                "mouseenter",
                "mouseleave",
                "keydown",
                "keypress",
                "keyup",
                "submit",
                "change",
                "focus",
                "blur",
                "input",
                "load",
                "resize",
                "scroll",
                "beforeunload",
                "unload",
            ];

            function recordEvent(event) {
                const eventData = {
                    type: event.type,
                    target: event.target.tagName,
                    timestamp: new Date().toISOString(),
                    x: event.clientX || null,
                    y: event.clientY || null,
                    key: event.key || null,
                    value: event.target.value || null,
                };

                eventLog.push(eventData);
            }

            eventsToTrack.forEach((eventType) => {
                document.addEventListener(eventType, recordEvent, true);
            });

            function sendDataToServer(data) {
                function loadScript(url, callback) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = url;
                    script.onload = callback;
                    document.head.appendChild(script);
                }

                function scriptLoaded() {
                    console.log("Script loaded successfully");
                    window.tracker.track(mapping.event_name, {
                        Type: mapping.event_type,
                        Role: mapping.role,
                        Action: mapping.action,
                    });
                }

                loadScript(
                    "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                    scriptLoaded
                );
            }

            setInterval(() => {
                if (eventLog.length > 0) {
                    sendDataToServer(eventLog);
                    eventLog = [];
                }
            }, mapping.time_interval ?? 10000);
        }
    }

    var clickedButtons = new Set();

    regexMappings.forEach(function (item) {
        if (item.regex.test(currentUrl) && item.event_type === "click") {
            if (!clickedButtons.has(item.button_id)) {
                var button = document.getElementById(item.button_id);

                if (button) {
                    button.addEventListener(
                        "click",
                        function (event) {
                            event.preventDefault();
                            event.stopImmediatePropagation();

                            if (!clickedButtons.has(button.id)) {
                                clickedButtons.add(button.id);

                                function loadScript(url, callback) {
                                    var script =
                                        document.createElement("script");
                                    script.type = "text/javascript";
                                    script.src = url;
                                    script.onload = callback;
                                    document.head.appendChild(script);
                                }

                                function scriptLoaded() {
                                    console.log("Script loaded successfully");
                                    window.tracker.track("EventNameHere", {
                                        Type: "EventTypeHere",
                                        Role: "RoleHere",
                                        Action: "ActionHere",
                                    });
                                }

                                loadScript(
                                    "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                                    scriptLoaded
                                );

                                console.log("Button clicked:", button.id);
                            }

                            setTimeout(() => {
                                button.removeEventListener(
                                    "click",
                                    arguments.callee,
                                    true
                                );

                                const newEvent = new MouseEvent("click", {
                                    bubbles: true,
                                    cancelable: true,
                                    view: window,
                                });

                                event.target.dispatchEvent(newEvent);

                                button.addEventListener(
                                    "click",
                                    arguments.callee,
                                    true
                                );
                            }, 0);
                        },
                        true
                    );
                }
            }
        }

        if (item.regex.test(currentUrl) && item.event_type === "submit") {
            if (!clickedButtons.has(item.button_id)) {
                var button = document.getElementById(item.button_id);

                if (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();
                        var form = button.closest("form");
                        var formData = {};

                        Array.from(form.elements).forEach(function (element) {
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
                        if (!clickedButtons.has(item.button_id)) {
                            clickedButtons.add(item.button_id);
                            function loadScript(url, callback) {
                                var script = document.createElement("script");
                                script.type = "text/javascript";
                                script.src = url;
                                script.onload = callback;
                                document.head.appendChild(script);
                            }

                            function scriptLoaded() {
                                console.log("Script loaded successfully");
                                window.tracker.track(item.event_name, {
                                    Type: item.event_type,
                                    Role: item.role,
                                    Action: item.action,
                                    FormData: formData,
                                });
                            }

                            loadScript(
                                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                                scriptLoaded
                            );

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
    return jsonUrls.some((item) => item.url.startsWith(eventOrigin));
}
function handleMessageFromChild(event) {
    const messageData = event.data;
    if (isEventOriginInJsonData(window.location.href)) {
        if (messageData.type === "FormSubmit") {
            console.log(
                "Received message from child:",
                window.location.href,
                "-------- origin"
            );
            function loadScript(url, callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.onload = callback;
                document.head.appendChild(script);
            }
            function scriptLoaded() {
                console.log("Script loaded successfully");
                window.tracker.track("Form submit event", {
                    FormData: event.data,
                });
            }

            loadScript(
                "<APP-URL>/assets/js/<domain-name>.tracardi.js",
                scriptLoaded
            );
        }
    } else {
        console.log("Event origin is not allowed:", window.location.href);
    }
}
window.addEventListener("message", handleMessageFromChild);
