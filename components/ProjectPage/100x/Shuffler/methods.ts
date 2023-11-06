// 1:CUT, 2:OVERHAND, 3:FARO (perfect riffle), 4:WASH (Fisher-Yates - Random), 5:REVERSE

export const methods = {
  cut: 1,
  faro: 3,
  overhand: 2,
  reverse: 5,
  top: 0,
  wash: 4,
} as const;

export type Method = keyof typeof methods;
export type MethodId = (typeof methods)[keyof typeof methods];

export const methodDescriptions: Record<Method, string> = {
  cut: "The stack is 'randomly' cut between stack number 40 and 60, then the lower stack is placed on top of the upper.",
  faro: "AKA the perfect rifle shuffle, this splits the stack in half and alternates on restack.",
  overhand:
    "Small groups of layers are pulled from the top and placed on the bottom, until the bottom is reached.",
  reverse:
    "Reverses the stacking order (1, 2, 3 ... 98, 99, 100) -> (100, 99, 98 ... 3, 2, 1).",
  top: "Pulls the specified layer from its position and adds it to the top of the stack (sets its draw order to last).",
  wash: "Randomizes the stacking order by using a version of the Fisher-Yates method.",
};
