` Giving a keywords contains a <first word>, an <operator>, and a <last word> such as "cat + dog". `;
` Giving a <string> which might contains the keywords, such as: "I have a cat and a dog." `;
` Requirements: when the <operator> is "+", the <string> must includes both <first word> and <last word>. 
					If true, 
						return 1.
					Else, 
						return 0. `;
`				when the <operator> is "-", the <string> must not includes either <first word> or <last word>. 
					If true, 
						return 1.
					Else, 
						return 0. `;
` Finish the rest of part within the giving Function "isMatch". `;

function isMatch(_keyword, _string) {
	let [_first, _mid, _last] = _keyword.split(" ");

	switch (_mid) {
		case "+":
			return _string.includes(_first) && _string.includes(_last) ? rst = 1 : rst = 0;
			break;
		case "-":
			return _string.includes(_first) || _string.includes(_last) ? rst = 0 : rst = 1;
			break;
		default:
			break;
	}
}



const keyword_1 = "cat + dog";
const string_1  = "my cat loves my dog";

const keyword_2 = "cat - dog";
const string_2  = "my cat loves my dog";

const keyword_3 = "cat + bird";
const string_3  = "my cat loves my dog";

const keyword_4 = "horse - bird";
const string_4  = "a horse is chasing a bird";

const keyword_5 = "horse + bird";
const string_5  = "my cat loves my dog";

const keyword_6 = "horse - bird";
const string_6  = "my cat loves my dog";


isMatch(keyword_1, string_1) //?
isMatch(keyword_2, string_2) //?
isMatch(keyword_3, string_3) //?
isMatch(keyword_4, string_4) //?
isMatch(keyword_5, string_5) //?
isMatch(keyword_6, string_6) //?
