
const clamp = (num, min, max) => {
	if (max < min) {
		const tmax = min;
		min = max;
		max = tmax;
	}

	if (num < min) return min;
	else if (num > max) return max;

	return num;
}

const lerp = (min, max, amount) => {
	return min + amount * (max - min);
}

const map = (num, min1, max1, min2, max2, round = false, constrainMin = true, constrainMax = true) => {
	if (constrainMin && num < min1) return min2
	if (constrainMax && num > max1) return max2

	const num1 = (num - min1) / (max1 - min1)
	const num2 = (num1 * (max2 - min2)) + min2
	if (round) return Math.round(num2)
	return num2
};

const mod = (n, m) => {
	return ((n % m) + m) % m
}

const round = (num) => {
    return Math.round(num)
}

const random = (min, max) => {
	if (Object.prototype.toString.call(min) === '[object Array]') return min[~~(Math.random() * min.length)]

	if (typeof max !== 'number') {
		max = min || 1
		min = 0
	}

	return min + Math.random() * (max - min)
}


const findHigherValue = (num) => {
    if (toString.call(num) !== "[object Array]")  
        return false;
    return Math.max.apply(null, num);
}

const findLowerValue = (num) => {
    if (toString.call(num) !== "[object Array]")  
       return false;
    return Math.min.apply(null, num);
}


// find extremes value of an array
const findExtremes1D = (arr) => {
    let xMin = findHigherValue(arr);
    let xMax = findLowerValue(arr)

    return {xMin,xMax}
}


const findExtremesPlane = (arr) => {
    let lats = arr.map(x => {
      if(typeof x ===  'object') x = Object.values(x)
      return x[0]
    })
    let long = arr.map(x => {
      if(typeof x ===  'object') x = Object.values(x)
    	return x[1]
    })

    let xMin = findLowerValue(lats);
    let xMax = findHigherValue(lats)

    let yMin = findLowerValue(long);
    let yMax = findHigherValue(long)

    return {xMin,xMax,yMin,yMax}
}


const dist = () => {

}

export { PI, HALF_PI, QUARTER_PI, TWO_PI, DEG_TO_RAD, RAD_TO_DEG, clamp, lerp, map, mod, random, imageCrawler,extractInfos, imageExtractor};





