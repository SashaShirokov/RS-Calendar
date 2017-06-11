let $ = require('jquery');

module.exports = {
    setFeedBacks: function(feedbacks) {
        if ($.isArray(feedbacks)) {
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            return feedbacks;
        }
    },
    getFeedBacks: function() {
        let stringFeedbacks = localStorage.getItem('feedbacks');
        let feedbacks = [];

        try {
            feedbacks = JSON.parse(stringFeedbacks);
        } catch (e) {

        }

        return $.isArray(feedbacks) ? feedbacks : [];
    },

    filterFeedBacks(feedbacks, showHidden, searchText) {
       let filteredFeedBacks = feedbacks;

       // Filter by showHidden
       filteredFeedBacks = filteredFeedBacks.filter((feedback) => {
         return !feedback.hidden || showHidden;
       })

       // Filter by searchText
       filteredFeedBacks = filteredFeedBacks.filter((feedback) => {
         let text = feedback.text.toLowerCase();
         return searchText.length === 0 || text.indexOf(searchText) > -1;
       })

       // Sort feedbacks with non-hidden  first
       filteredFeedBacks.sort((a, b) => {
         if (a.hidden === false && b.hidden === true) {
           return -1;
         } else if (a.hidden && !b.hidden) {
           return 1;
         } else {
           return 0;
         }
       })

       return filteredFeedBacks;
    }
}
