var findMedianSortedArrays = function (nums1, nums2) {
  var newarray = (nums1.concat(nums2)).sort();
  var half = newarray.length % 2 === 0 ?
    (newarray[(newarray.length / 2) - 1] + newarray[(newarray.length / 2)]) / 2 :
    newarray[((newarray.length + 1) / 2) - 1];
  return half
};

module.exports = findMedianSortedArrays;