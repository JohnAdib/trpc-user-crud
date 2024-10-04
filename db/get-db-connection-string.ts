export function getDbConnectionString() {
  // default connection string
  const defaultUrl =
    'postgresql://ThisIsUser:ThisIsPassword@localhost:5432/trpc-user-crud'
  console.log('getDbConnectionString -> default', defaultUrl)

  // get connection string from env
  const envUrl = process.env.DATABASE_URL
  console.log('getDbConnectionString -> env', envUrl)

  // final connection string
  const connectionString = envUrl || defaultUrl
  console.log('getDbConnectionString -> connectionString', connectionString)

  return connectionString
}
