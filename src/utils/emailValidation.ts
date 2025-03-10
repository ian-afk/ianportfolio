export const filterObjectValue = (params: Record<string, any>) => {
  if (typeof params === "object") {
    const emptyFields = Object.keys(params).filter(
      (key) =>
        params[key] === "" ||
        params[key] === null ||
        params[key] === undefined ||
        params[key] === 0
    );
    return {
      disabled: emptyFields.length !== 0,
      emptyFields,
    };
  }
  return { disabled: true, emptyFields: [] };
};
