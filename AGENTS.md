# remote server setup
    - should be suitable for pushing to railway from GitHub

## The remoe server/dev environment should 
    - include node with typescript support.
    - be able to create a 'hello world' app running remotely on railway using 
    - a linter
    - testing support suitable for TDD

## decisions
    - should vs code be installed on railway or should vs code simply edit code on railway
    - I don't need any cutting edge node or typescript features. what are good versions of typescript and node that will probably work with most current node libraries? 
    - which lint support?
    - which testing support?

## key consideration:
    - I want to be able to do simple things using a mobile device and an agentic model such as Claude code, codex, or Factory.ai's droid. Since the optimal tool will probably change, flexibility is a key consideration. But, another consideration is time to get some development underway. We need a balance between forward looking and time to first app,

## Codex questions
please see ansers inline below with 'bw:' identifier.

  - Do you already have a preference or any constraints on the Railway project
  setup (e.g., existing service, desired region, environment variables to
  manage)?
    bw: none so far.
  - For the “hello world” app, are you envisioning a simple HTTP API or
  something else (e.g., web page)?
    bw: HTTP API to start
  - Do you want the developer experience to be entirely remote (coding on
  Railway) or hybrid (local dev with remote deployment)?
    bw: I want the setup to give me the option. changes should be pushed to githop from railay or my laptop. Will that create major problems? I envision using codex on the rmote device some of the time.
  - Are there specific mobile clients or workflows you want to support beyond
  browser-based terminals/editors?
    bw: eventually, I will want both android and iOS support, but I want to start simply.
