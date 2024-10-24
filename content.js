// Function to enhance the visibility of specific elements within the logs
function enhanceLogs() {
    const logElements = document.querySelector('body > div.bPageBlock > div.pbBody > div.pbSubsection > table.detailList > tbody > tr > td.dataCol > pre.codeBlock');

    if (logElements.length > 0) {
      logElements.forEach(log => {
        let logText = log.innerText;
  
        // Highlight ERROR in red
        logText = logText.replace(/ERROR/g, "<span style='color:red;font-weight:bold;'>ERROR</span>");
  
        // Highlight DEBUG in green
        logText = logText.replace(/DEBUG/g, "<span style='color:green;font-weight:bold;'>DEBUG</span>");
  
        // Highlight VARIABLE_ASSIGNMENT in blue
        logText = logText.replace(/VARIABLE_ASSIGNMENT/g, "<span style='color:blue;font-weight:bold;'>VARIABLE_ASSIGNMENT</span>");
  
        // Highlight SYSTEM_METHOD_ENTRY in orange
        logText = logText.replace(/SYSTEM_METHOD_ENTRY/g, "<span style='color:orange;font-weight:bold;'>SYSTEM_METHOD_ENTRY</span>");
  
        // Highlight SYSTEM_METHOD_EXIT in light orange
        logText = logText.replace(/SYSTEM_METHOD_EXIT/g, "<span style='color:#FFA500;font-weight:bold;'>SYSTEM_METHOD_EXIT</span>");
  
        // Highlight STATEMENT_EXECUTE in purple
        logText = logText.replace(/STATEMENT_EXECUTE/g, "<span style='color:purple;font-weight:bold;'>STATEMENT_EXECUTE</span>");
  
        // Highlight SYSTEM_MODE_ENTRY in dark cyan
        logText = logText.replace(/SYSTEM_MODE_ENTER/g, "<span style='color:darkcyan;font-weight:bold;'>SYSTEM_MODE_ENTER</span>");
  
        // Highlight HEAP_ALLOCATE in teal
        logText = logText.replace(/HEAP_ALLOCATE/g, "<span style='color:teal;font-weight:bold;'>HEAP_ALLOCATE</span>");
  
        // Highlight LIMIT_USAGE in magenta
        logText = logText.replace(/LIMIT_USAGE/g, "<span style='color:magenta;font-weight:bold;'>LIMIT_USAGE</span>");
  
        // Apply the modified HTML back to the log
        log.innerHTML = logText;
      });
    }
  }
  
  // Use MutationObserver to detect when logs are dynamically loaded and enhance them
  function observePageChanges() {
    const targetNode = document.body; // Monitor the entire body for changes
  
    const config = { childList: true, subtree: true };
  
    const callback = function(mutationsList, observer) {
      mutationsList.forEach(mutation => {
        const logElements = document.querySelectorAll('pre.codeBlock');
        if (logElements.length > 0) {
          enhanceLogs(); // Enhance logs once they're added to the DOM
        }
      });
    };
  
    // Create a new observer and start observing the page
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  
  // Start observing the page when the DOM is fully loaded
  window.addEventListener('DOMContentLoaded', observePageChanges);
  