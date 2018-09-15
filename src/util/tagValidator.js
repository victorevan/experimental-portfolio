import acceptedTags from '../config/acceptedTags';

export default (tag) => {
  tag = tag.toLowerCase();
  let tagIsValidated = false;
  acceptedTags.forEach((validTag) => {
    if (tag === validTag) {
      tagIsValidated = true;
    }
  });
  return tagIsValidated;
};