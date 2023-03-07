/** @type {import ('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["<rootdir>/test/.test.js"],
    verbose: true,
    forceExit: true,
    // clearMocks:true
    // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};