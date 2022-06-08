import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

export function formatTimestamp(timestamp) {
  const date = fromUnixTime(timestamp);
  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  return timeAgo;
}

export function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
          return true;
      }
  }
  return false;
}

export function checkForKeyInArrayOfObjects(array, key) {
  for (let obj in array) {
    let keys = Object.keys(obj)
    if (keys[0] === key) {
      return true
    }
  }
  return false
}

export function FilterComsById(comments, id) {
  for (let comment in comments) {
    if (comment.hasOwnProperty(id)) {
      return comment;
    }
  }
  return false
}