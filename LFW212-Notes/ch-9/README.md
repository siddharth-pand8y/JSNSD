- Parameter Pollution
  
  - `node -p "querystring.parse('name=bob')"`
  - Handle query params with type check
  - 

- Route Validation
  
  - JSON Schema
    
    - Ref: https://json-schema.org/
  
  - Route Options: https://fastify.dev/docs/v4.24.x/Reference/Routes/#options
  
  - Configure Validation Behavior: https://fastify.dev/docs/v4.24.x/Reference/Validation-and-Serialization/#validator-compiler
  
  - Shared Schema: https://fastify.dev/docs/v4.24.x/Reference/Validation-and-Serialization/#adding-a-shared-schema

- While invalidation of input-related schemas (such as **schema.body**) will result in a 400 Bad Request, the invalidation of a response schema will result in a 500 Server Error result


