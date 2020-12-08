const Vector = require('vector-object');
var natural = require('natural');
var TfIdf = natural.TfIdf;

const formatData = data => {
    let formatted = [];
    data.map(project => {
        let tmpObj = {};

        //formatting the strings to get a uniform structure throughout the db.
        const technologiesCleaned = project.techStack.map(tool => {
            tool = tool.trim();
            tool = tool.replace(/ /g, '-');
            tool = tool.replace(/_/g, '-');
            tool = tool.replace(/\./g, '-');
            tool = tool.toLowerCase()
            
            return tool;
        })
        
        const tech = technologiesCleaned.join(' ');

        tmpObj = {
            id: project._id,
            content: tech
        }
        formatted.push(tmpObj);
    })
    
    //console.log(formatted)
    return formatted;
  };

  const createVectors = processedDocs => {
    const tfidf = new TfIdf();
  
    processedDocs.forEach(processedDocument => {
      tfidf.addDocument(processedDocument.content);
    });
    const documentVectors = [];
  
    for (let i = 0; i < processedDocs.length; i += 1) {
      const processedDocument = processedDocs[i];
      const obj = {};
  
      const items = tfidf.listTerms(i);
        // console.log(items)
      for (let j = 0; j < items.length; j += 1) {
        const item = items[j];
        obj[item.term] = item.tfidf;
      }
  
      const documentVector = {
        id: processedDocument.id,
        vector: new Vector(obj)
      };
  
      documentVectors.push(documentVector);
      
    }
        return documentVectors;
    }

    const findSimilar = vectors => {
        //number of results that you want to return
        const MAX_SIMILAR = 20; 
        //min cosine similarity score that should be returned
        const MIN_SCORE = -100;
        const data = {};
      
        vectors.forEach(vector => {
            const { id } = vector;
            data[id] = [];
        })
      
        //find similar vectors
        for (let i = 0; i < vectors.length; i += 1) {
          for (let j = 0; j < i; j += 1) {
            const idi = vectors[i].id;
            const vi = vectors[i].vector;
            const idj = vectors[j].id;
            const vj = vectors[j].vector;
            const similarity = vi.getCosineSimilarity(vj);
      
            if (similarity > MIN_SCORE) {
              data[idi].push({ id: idj, score: similarity });
              data[idj].push({ id: idi, score: similarity });
            }
          }
        }
      
        // sort similar vectors in descending order
        Object.keys(data).forEach(id => {
          data[id].sort((a, b) => b.score - a.score);
      
          if (data[id].length > MAX_SIMILAR) {
            data[id] = data[id].slice(0, MAX_SIMILAR);
          }
        });
      
        return data;
    }

    

    // console.log(results)
  
    const getResults = (id, results) => {
        let similarDocuments = results[id];
      
        if (similarDocuments === undefined) {
          return ["lol"];
        }
        return similarDocuments;
      };

module.exports = {formatData, createVectors, findSimilar, getResults};