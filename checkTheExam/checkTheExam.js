/*
The first input array contains the correct answers to an exam, 
like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. 
Return the score for this array of answers, giving +4 for each correct answer, 
-1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

function checkExam(array1, array2) {
	let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            score = score + 4;
        }
        else if (array2[i] == "") {
            score = score;
        }
        else if (array1[i] !== array2[i]) {
            score = score - 1;
        }
    }
    if (score < 0) {
      return 0;
    }
        return score;
}


//Answer with console.log feedback for each question.

function checkExam(array1, array2) {

	let score = 0;
    let question = 0;

    for (let i = 0; i < array1.length; i++) {
  
        if (array1[i] === array2[i]) {
            score = score + 4;
            question++;
                console.log(
                            "Question " + question + "\n" + "-----------------" + "\n" +
                            "Exam Answer    = " + array1[i] + "\n" +
                            "Student Answer = " + array2[i] + "\n" +
                            "Correct! +4 to student test." + "\n" +
                            "======================================");
        }

        else if (array2[i] == "") {
            question++
            score = score;
                console.log(
                            "Question " + question + "\n" + "-----------------" + "\n" +
                            "Exam Answer    = " + array1[i] + "\n" +
                            "Student Answer = " + array2[i] + "\n" +
                            "No Input. 0 to student test" + "\n" +
                            "======================================");
        }
        
        else if (array1[i] !== array2[i]) {
            question++;
            score = score - 1;
                console.log(
                            "Question " + question + "\n" + "-----------------" + "\n" +
                            "Exam Answer    = " + array1[i] + "\n" +
                            "Student Answer = " + array2[i] + "\n" +
                            "Wrong. -1 to student test" + "\n" +
                            "======================================");
        }

    }

        if (score < 0) {
            return 0;
        }
    
        return "Student score = " + score;
}



//Other answers 

checkExam=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)

//---------------------------------------------------------------------------------------//

function checkExam(arr1, arr2) {
    let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c+4 : c-1) : c, 0);
    return result < 0 ? 0 : result;
}

//---------------------------------------------------------------------------------------//


const checkExam = (array1, array2) => {
    let result = array2.reduce(
        (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
        }
    , 0);
    return result < 0 ? 0 : result;
}

  //---------------------------------------------------------------------------------------//