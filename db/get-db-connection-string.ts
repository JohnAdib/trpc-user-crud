export function getDbConnectionString() {
  // default connection string
  const defaultUrl =
    'postgresql://ThisIsUser:ThisIsPassword@localhost:5432/trpc-user-crud'
  // console.debug('getDbConnectionString -> default', defaultUrl)

  // get connection string from env
  const envUrl = process.env.DATABASE_URL
  // console.debug('getDbConnectionString -> env', envUrl)

  // final connection string
  const connectionString = envUrl || defaultUrl
  // console.debug('getDbConnectionString -> connectionString', connectionString)

  return connectionString
}
