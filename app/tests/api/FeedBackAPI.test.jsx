import expect from 'expect';

import FeedBackAPI from 'FeedBackAPI';

describe('FeedBackAPI', () => {
  it('should exist', () => {
    expect(FeedBackAPI).toExist();
  });

  describe('setFeedBacks', () => {
    beforeEach(() => {
      localStorage.removeItem('feedbacks');
    });

    it('should set valid feedbacks array', () => {
      let feedbacks = [{
        id: 25,
        test: 'testing 123',
        hidden: false
      }];
      FeedBackAPI.setFeedBacks(feedbacks);

      let actualFeedBacks = JSON.parse(localStorage.getItem('feedbacks'));

      expect(actualFeedBacks).toEqual(feedbacks);
    });

    it('should not set invalid feedbacks array', () => {
      let badFeedBacks = {a: 'c'};
      FeedBackAPI.setFeedBacks(badFeedBacks);

      expect(localStorage.getItem('feedbacks')).toBe(null);
    })
  });

  describe('getFeedBacks', () => {
      it('should return empty array for bad localStorage data', () => {
        let actualFeedBacks = FeedBackAPI.getFeedBacks();
        expect(actualFeedBacks).toEqual([]);
      });

      it('should return feedback if valid array in localStorage', () => {
        let feedbacks = [{
          id: 30,
          test: 'testing 789',
          hidden: false
        }];
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        let actualFeedBacks = FeedBackAPI.getFeedBacks();

        expect(actualFeedBacks).toEqual(feedbacks);
      });
  });

  describe('filterFeedBacks', () => {
    let feedbacks = [{
      id: 1,
      text: "Some text",
      hidden: true
    }, {
      id: 2,
      text: "Other text",
      hidden: false
    }, {
      id: 3,
      text: "Some another one more text",
      hidden: true
    }];

    it('should return all items if showHidden is true', () => {
      let filteredFeedBacks = FeedBackAPI.filterFeedBacks(feedbacks, true, '');
      expect(filteredFeedBacks.length).toBe(3);
    });

    it('should return only not hidden items if showHidden is false', () => {
      let filteredFeedBacks = FeedBackAPI.filterFeedBacks(feedbacks, false, '');
      expect(filteredFeedBacks.length).toBe(1);
    });

    it('should sort by hidden status', () => {
      let filteredFeedBacks = FeedBackAPI.filterFeedBacks(feedbacks, true, '');
      expect(filteredFeedBacks[0].hidden).toBe(false);
    });

    it('should filter feedbacks by searchtext', () => {
      let filteredFeedBacks = FeedBackAPI.filterFeedBacks(feedbacks, true, 'some');
      expect(filteredFeedBacks.length).toBe(2);
    });

    it('should return all feedbacks if searchText is empty', () => {
      let filteredFeedBacks = FeedBackAPI.filterFeedBacks(feedbacks, true, '');
      expect(filteredFeedBacks.length).toBe(3);
    });
  });
});
