"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = async (logSources, printer) => {
  while (true) {
    logSources.sort((a, b) => a.last.date.getTime() - b.last.date.getTime());
    const entry = await logSources[0].popAsync();
    if (!entry) {
      break;
    }
    try {
      printer.print(entry);
    } catch {}
  }
  printer.done();

  console.log("Async sort complete.")
};
