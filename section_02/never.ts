function err(message: string, code: number): never {
  throw { message, code };
}

// The diferences between never and void is that with void, no return statement is defined but the function does return undefined, in the case of never the return never happens.
