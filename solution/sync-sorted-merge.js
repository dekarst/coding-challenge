"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  while (true) {
    logSources.sort((a, b) => a.last.date.getTime() - b.last.date.getTime());
    const entry = logSources[0].pop();
    if (!entry) {
      break;
    }
    try {
      printer.print(entry);
    } catch {}
  }
  printer.done();

  return console.log("Sync sort complete.");
};
