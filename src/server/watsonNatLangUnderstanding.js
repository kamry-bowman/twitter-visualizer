const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1');

const NLU = (text) => {

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  })

  var parameters = {
    text,
    features: {
     
      categories: {
      concepts: {
        limit: 10
      },
      emotion: {
        document: true
      },
      sentiment: true,
      keywords: true
    },
    entities: {
      limit: 50
    },
    keywords: {
      limit: 10
    },

  },
    clean: true,
  };
  
    
  naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
    if (err) console.log(err)
    else return JSON.stringify(response, null, 2);
  })
}