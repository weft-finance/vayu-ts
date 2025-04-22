export function getEnvVar<EnumType extends string = string>(name: string) {
  return process.env[name] as EnumType;
}

export function getRequiredEnvVar<EnumType extends string = string>(name: string) {
  const envVarValue = getEnvVar<EnumType>(name);

  if (!envVarValue) {
    throw new Error(`Environment variable ${name} is required`);
  }

  return envVarValue;
}