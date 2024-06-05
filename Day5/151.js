// What is tree shaking

// Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code

// It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

export function drive(props) {
  return props.gas;
}

export function fly(props) {
  return props.miles;
}

// fly() was never importent and won't be included in our bundle

// It only works with import and export. It won’t work with CommonJS require syntax.
