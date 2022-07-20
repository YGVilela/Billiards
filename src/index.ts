async function main() {
  // Initialize contexts
  // Render application window
}

main()
  .then(() => console.log("Done"))
  .catch((err) => console.log(err))
  .finally(() => setTimeout(() => "Ok", 5000));
