# Watch score

Data analysts at Amazon are stydying the trends in movies and shows popular on Prime Video in order to enhance the user experience.

They have identified the best critic-rated and the best audience-rated web series, represented by integer IDs _series1_, and _series2_. They also define the _watch score_ of a contiguous period of some days as the number of distinct series watched by a viewer during that period.

Given an array of _watch_history_, of size _n_, that represents the web series watched by a viewer over a period of _n_ days, and two integers, _series1_ and _series2_, report the minimum _watch score_ of a contiguous period of days in which both _series1_ and _series2_ have been viewed at least once. If _series1_ and _series2_ are the same value, one occurrence during the period is sufficient.

#### Example

_n = 5  
series1 = 1  
series2 = 2  
watch_history = [1, 3, 2, 1, 4]_

The contiguous periods of days in which series1 and series2 have been viewed at least once are:-

| Period of days<br>(Subarray of watch_history) | Watch Score<br>(Distinct series watched) |
| :-------------------------------------------: | :--------------------------------------: |
|                   [1, 3, 2]                   |                    3                     |
|                   [3, 2, 1]                   |                    3                     |
|                    [2, 1]                     |                    2                     |
|                 [1, 3, 2, 1]                  |                    3                     |
|                [1, 3, 2, 1, 4]                |                    4                     |

Return the minimum watch score, 2.

#### Function Description

Complete the function _getMinScore_.

_getMinScore_ has the following parameters:

> _int watch_history[n]:_ the watch history of a viewer over _n_ days  
> _int series1:_ ID of the best critic-rated web series  
> _int series2:_ ID of the best audience-rated web series

#### Returns

> _int:_ the minimum watch score of a contiguous period of days in which _series1_ and _series2_ have been viewed at least once

#### Constraints

- _1 ≤ n ≤ 10<sup>5</sup>_
- _1 ≤ watch_history[i] ≤ 10<sup>9</sup>,_ where _0 ≤ i < n_
- _1 ≤ series1, series2 ≤ 10<sup>9</sup>,_ _series1_ and _series2_ are not necessarily distinct.
- There will be at least one occurrence of both _series1_ and _series2_ in _watch_history_.

#### Samples

<details>
<summary>Sample Case 0</summary>

```ts
const watchHistory = [1, 2, 2, 2, 5, 2];
const series1 = 1;
const series2 = 5;

console.log(getMinScore(watchHistory, series1, series2));

// Sample output: 3
```

##### Explanation

Given, _n = 6, watch_history = [1, 2, 2, 2, 5, 2], series1 = 1,_ and _series2 = 5_.  
There is only one period in which both _series1_ and _series2_ have been watched, i.e., the subarray [1, 2, 2, 2, 5]. The watch score of this period is 3, which is the minimum possible.

</details>

<details>
<summary>Sample Case 1</summary>

```ts
const watchHistory = [1, 2, 3, 5, 1];
const series1 = 5;
const series2 = 5;

console.log(getMinScore(watchHistory, series1, series2));

// Sample output: 1
```

##### Explanation

Given, _n = 5, watch_history = [1, 2, 3, 5, 1], series1 = 5,_ and _series2 = 5_.  
Among all the periods of days in which both _series1_ and _series2_, i.e. series with ID = 5 have been watched, the subarray with the least watch score is [5]. Its watch score is 1.

</details>
