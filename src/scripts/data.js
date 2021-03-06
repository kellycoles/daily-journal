
// const API = {
//     getJournalEntries: function () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// } 
// SAME AS BELOW: getJournalEntries() is a method in both

const API = {
    getJournalData() {
        return fetch("http://localhost:3000/entries?_sort=date&_order=desc") // Fetch from the API
            .then(response => response.json())        // Parse as JSON

    },

    saveJournalEntries(entryObject) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
    },

  filterJournalEntries(mood) {
    console.log(`http://localhost:3000/entries?mood=${mood}`);
    return fetch(`http://localhost:3000/entries?mood=${mood}`)
    .then(entries => entries.json())
  },

  deleteJournalEntry(deleteBtnId) {
    return fetch(`http://localhost:3000/entries/${deleteBtnId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  editJournal(entry) {
      return fetch(`http://localhost:3000/entries/${entry.id}`, {
          "method": "PUT",
          "headers": {
              "Content-Type": "application/json"
          },
          "body": JSON.stringify(entry)
      })
          .then(response => response.json())

  }
 
}  

export default API