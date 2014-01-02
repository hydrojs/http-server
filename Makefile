#
# Paths
#

COV = node_modules/.bin/istanbul
COV_EXEC = node_modules/.bin/_hydro
TEST_EXEC = node_modules/.bin/hydro
COVERALLS = node_modules/coveralls/bin/coveralls.js

#
# All
#

all: install test

#
# Install
#

install: node_modules

#
# Run all tests
#

test: test-node

#
# Run the Node.js tests
#

test-node: node_modules
	@$(TEST_EXEC)

#
# Test coverage
#

test-cov: node_modules
	@$(COV) cover $(COV_EXEC)

#
# Clean all
#

clean: clean-node clean-cov

#
# Clean node_modules
#

clean-node:
	@rm -rf node_modules

#
# Clean the test coverage
#

clean-cov:
	@rm -rf coverage

#
# CI
#

ci: test-node coveralls

#
# Send coverage to coveralls
#

coveralls: node_modules
	@$(COV) cover $(COV_EXEC) --report lcovonly && cat ./coverage/lcov.info | $(COVERALLS)

#
# Install Node.js modules
#

node_modules:
	@npm install

#
# Instructions
#

.PHONY: all test coverage
