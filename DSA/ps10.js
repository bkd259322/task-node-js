function merge(nums1, m, nums2, n) {
    let p1 = m - 1; 
    let p2 = n - 1; 
    let p = m + n - 1; 

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}


let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1); 

nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1); 

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1); 
