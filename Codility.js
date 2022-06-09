// please change all the main function name to 'solution' when submitting to codility

//01 - 01
//https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
function BinaryGap(N) {
  const binaryArray = N.toString(2).split('');
  let solution = 0;
  let count = 0;
  binaryArray.forEach(item=>{
    if(item == '1'){
       solution = count > solution ? count : solution;
       count = 0;
    }
    else count++;
  })
  return solution;
}

//02 - 01
//https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
function CyclicRotation(A, K) {
  const L = A.length - (K % A.length); // to get the rotation length value below array length (since rotation of product of array length gives same array)
  const A1 = A.slice(L); // last part of array which need to be get to front after L times rotation
  const A2 = A.slice(0, L); // part which rotate L times to right side
  const Result = [...A1, ...A2]; // reverse and join both array by spreading
  return Result;
}

//02 - 02
//https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function OddOccurrencesInArray(A) {
  const solution = A.reduce((a,c) => a^c);
  return solution;
  
  let result = 0;
  A.forEach((val) => (result ^= val)); //https://codereview.stackexchange.com/questions/128605/find-the-odd-occurrences-in-an-array/128608#128608
  return result;
}

//03 - 01
//https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
function FrogJmp(X, Y, D) {
  const d = Y - X;
  return Math.ceil(d / D);
}

//03 - 02
//https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
function PermMissingElem(A) {
  let sumOfA =
    A.length > 0 ? A.reduce((accumulator, curr) => accumulator + curr) : 0;
  let sumOfN = 0;
  A.forEach((val, ind) => (sumOfN += ind + 1));
  const element = A.length - (sumOfA - sumOfN) + 1;
  return element;
}

//03 - 03
//https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
function TapeEquilibrium(A) {
  let left = A[0];
  let right = A.reduce((acc, curr) => acc + curr) - A[0];
  let min = Math.abs(left - right);
  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    min = Math.min(min, Math.abs(left - right));
  }
  return min;
}

//04-01
//https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
function FrogRiverOne(X, A) {
  let covered = 0;
  let tempArray = [];
  for (let i = 0; i < A.length; i++) {
    if (!tempArray[A[i]]) {
      tempArray[A[i]] = true;
      covered++;
      if (covered === X) return i;
    }
  }
  return -1;
}

//04-02
//https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
function PermCheck(A) {
  for (let i = 0; i < A.length; i++) if (A[i] > A.length) return 0;
  return new Set(A).size === A.length ? 1 : 0;
}

//04-03
//https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
function MaxCounters(N, A) {
  var i;
  var j;
  var len = A.length;
  var lastMax = 0;
  var max = 0;
  var counters = new Array(N);
  for (j = 0; j < N; j++) counters[j] = 0;
  var n1 = N + 1;
  for (j = 0; j < len; j++) {
    if (A[j] < n1) {
      i = A[j] - 1;
      if (counters[i] < lastMax) counters[i] = lastMax;
      counters[i]++;
      if (max < counters[i]) max = counters[i];
    } else {
      lastMax = max;
    }
  }
  for (j = 0; j < N; j++) {
    if (counters[j] < lastMax) counters[j] = lastMax;
  }
  return counters;
}

//04-04
//https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
function MissingInteger(A) {
  const array = [...new Set(A.filter((val) => val > 0))].sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) if (array[i] != i + 1) return i + 1;
  return array.length + 1;
}

//05-01
//https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
function PassingCars(A) {
  let passing = 0;
  let west = 0;
  const len = A.length;
  for (let i = len - 1; i > -1; i--) {
    if (A[i] == 0) {
      passing += west;
      if (passing > 1000000000) return -1;
    } else west += 1;
  }
  return passing;
}

//05-02
//https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
function CountDiv(A, B, K) {
  let count = 0;
  if (K > B) count = A == 0 ? 1 : 0;
  const min = A >= K ? A + (A % K) : K;
  const max = B - (B % K);
  count = (max - min + K) / K + (A == 0 ? 1 : 0);
  return parseInt(count);
}

//05-03
//https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
function GenomicRangeQuery(S, P, Q) {
  let dna = "";
  let res = [];
  for (let i = 0; i < P.length; i++) {
    dna = S.slice(P[i], Q[i] + 1);
    if (dna.indexOf("A") !== -1) res.push(1);
    else if (dna.indexOf("C") !== -1) res.push(2);
    else if (dna.indexOf("G") !== -1) res.push(3);
    else res.push(4);
  }
  return res;
}

//05-04
//https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
function MinAvgTwoSlice(A) {
  for (let i = 0; i < A.length - 2; i++) {
    setVal((A[i] + A[i + 1]) / 2.0, i);
    setVal((A[i] + A[i + 1] + A[i + 2]) / 3.0, i);
  }
  setVal((A[A.length - 2] + A[A.length - 1]) / 2.0, A.length - 2);
  return minPos;
}
var minAvg = Number.MAX_VALUE;
var minPos = 0;
function setVal(val, i) {
  if (val < minAvg) {
    minPos = i;
    minAvg = val;
  }
}

//06-01
//https://app.codility.com/programmers/lessons/6-sorting/distinct/
function Distinct(A) {
  return [...new Set(A)].length;
}

//06-02
//https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
function MaxProductOfThree(A) {
  A.sort((a, b) => a - b);
  const n = A.length;
  const maxWithNegativeNumbers = A[0] * A[1] * A[n - 1];
  const maxWithPositiveNumbers = A[n - 3] * A[n - 2] * A[n - 1];
  return Math.max(maxWithNegativeNumbers, maxWithPositiveNumbers);
}

//06-03
//https://app.codility.com/programmers/lessons/6-sorting/triangle/
function Triangle(A) {
  A.sort((a, b) => a - b);
  A = A.filter((item) => item > 0);
  let n = A.length;
  for (let i = 0; i < n - 2; i++) {
      if (
          A[i] + A[i + 1] > A[i + 2] &&
          A[i + 1] + A[i + 2] > A[i] &&
          A[i + 2] + A[i] > A[i + 1]
      )
          return 1;
  }
  return 0;
}

//06-04
//https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
function sortArray(A) {
  return A.sort((a, b) => a - b)
}
function getDiskPoints(A) {
  const diskStartPoint = []
  const diskEndPoint = []
  for (i = 0; i < A.length; i++) {
      diskStartPoint.push(i - A[i])
      diskEndPoint.push(i + A[i])
  }
  return {
      diskStartPoint: sortArray(diskStartPoint),
      diskEndPoint: sortArray(diskEndPoint)
  };
}
function NumberOfDiscIntersections(A) {//main func
  const { diskStartPoint, diskEndPoint } = getDiskPoints(A)
  let index = 0;
  let openDisks = 0;
  let intersections = 0;
  for (i = 0; i < diskStartPoint.length; i++) {
      while (diskStartPoint[i] > diskEndPoint[index]) {
          openDisks--
          index++
      }
      intersections += openDisks
      openDisks++
  }
  return intersections > 10000000 ? -1 : intersections
}
//My solution with 81%
function NumberOfDiscIntersections(A) {
  let n = A.length
  let count = 0;
    for(let i=0; i<n-1; i++){
      for(let j=i+1; j<n; j++){
        if(i+A[i] >= j-A[j]){
          ++count;
        }
        if(count > 10000000) return -1;
      }
    }
  return count;
}

//07-01
//https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
function Brackets(S)