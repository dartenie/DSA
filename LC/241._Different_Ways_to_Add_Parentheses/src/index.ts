const bruteforce = (expression: string): number[] => {
  // since the problem wants us to generate all possible options
  // we can start with a brute force approach and see what can be optimized after
  // we dont really care about how we place parentheses, just the result
  // as such, we just need to choose when to split the string
  // once we split the string, it means we will calculate that recursion call
  // before the current one (operator)

  const dfs = (expr: string): number[] => {
    if (!expr.includes("+") && !expr.includes("-") && !expr.includes("*")) {
      return [parseInt(expr)];
    }

    const ans: number[] = [];

    for (let i = 0; i < expr.length; i++) {
      const chr = expr[i];
      if (chr === "+" || chr === "-" || chr === "*") {
        const ansLeft = dfs(expr.slice(0, i));
        const ansRight = dfs(expr.slice(i + 1));
        // cross product
        for (const left of ansLeft) {
          for (const right of ansRight) {
            if (chr === "+") {
              ans.push(left + right);
            } else if (chr === "-") {
              ans.push(left - right);
            } else {
              ans.push(left * right);
            }
          }
        }
      }
    }

    return ans;
  };

  return dfs(expression);
};

export default function diffWaysToCompute(expression: string): number[] {
  return bruteforce(expression);
}
