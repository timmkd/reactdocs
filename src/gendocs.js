'use strict';

var path = require('path');
var reactDocs = require('react-docgen');
var dir = require('node-dir');
var merge = require('lodash.merge');
var fs = require('fs');


var defaults = {
    ext: ['js', 'jsx'],
    ignoreDir: ['node_modules', 'bower_components'],
    template: path.join(__dirname, './template.md'),
    readmeFile: './README.md',
    delimiter: 'react-components-docs'
}

function generate(path, opts, done) {
    opts = merge({}, defaults, opts);

    readFiles(path, opts, function(data) {
        var file = '/tmp/data.json';
        var obj = {name: 'JP'};
        fs.writeFile('dist-docs/app/docs.json', JSON.stringify(data, null, '\t'), function (err) {
          if (err) return console.log(err);
        });
        typeof done === 'function' && done(markdown);
    });
}

function extensionMatcher(ext) {
    return new RegExp('\\.(?:' + ext.join('|') + ')$');
}

function readFiles(path, opts, done) {
    opts || (opts = {});
    var files = [];

    dir.readFiles(path, {
            match: extensionMatcher(opts.ext),
            excludeDir: opts.ignoreDir
        },
        function(error, content, filename, next) {
            var docs, compname;
            if (error) { process.exit(1); }
            docs = extractDocs(filename, content);
            if (docs.length) {
                compname = filename.split(/(\\|\/)/g).pop().split('.').shift();
                files.push({
                    path: filename,
                    name: compname,
                    docs: extractDocs(filename, content)
                });
            }
            next();
        },
        function(error) {
            if (error) { process.exit(1); }
            done(files);
        });
}

function extractDocs(filename, filecontent) {
    var resolver = reactDocs.resolver.findAllComponentDefinitions;
    try {
        var parsed = reactDocs.parse(filecontent, resolver);
        return parsed instanceof Array ? parsed : [parsed];
    } catch(e) {
        console.log('Not able to parse any docs in: %s', filename);
        return [];
    }
}

generate('src/components/');
