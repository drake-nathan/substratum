// 1:CUT, 2:OVERHAND, 3:FARO (perfect riffle), 4:WASH (Fisher-Yates - Random), 5:REVERSE

export const methods = {
  top: 0,
  cut: 1,
  overhand: 2,
  faro: 3,
  wash: 4,
  reverse: 5,
} as const;

export type Method = keyof typeof methods;
export type MethodId = (typeof methods)[keyof typeof methods];

export const methodDescriptions: Record<Method, string> = {
  top: "Pulls the specified layer from its position and adds it to the top of the stack (sets its draw order to last).",
  cut: "The stack is 'randomly' cut between stack number 40 and 60, then the lower stack is placed on top of the upper.",
  overhand:
    "Small groups of layers are pulled from the top and placed on the bottom, until the bottom is reached.",
  faro: "AKA the perfect rifle shuffle, this splits the stack in half and alternates on restack.",
  wash: "Randomizes the stacking order by using a version of the Fisher-Yates method.",
  reverse:
    "Reverses the stacking order (1, 2, 3 ... 98, 99, 100) -> (100, 99, 98 ... 3, 2, 1).",
};
