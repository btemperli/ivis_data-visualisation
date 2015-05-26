'''
Created on Nov 24, 2014

@author: sschubiger
'''
from scripting import *

import csv

# get a CityEngine instance
ce = CE()

states = {}

if __name__ == '__main__':
    f = open('/Users/btemperli/fhnw/FS15/ivis/cityengine/ivis/data/je-d-01.04.02.00.01.csv', 'rt')
    try:
        reader = csv.reader(f)
        for row in reader:
            try:
                states[float(row[1])] = row
            except ValueError:
                pass
    finally:
        f.close()
            
    for state in ce.getObjectsFrom(ce.getObjectsFrom(ce.scene, ce.withName('Kantone'))[0]):
        row = states[ce.getAttribute(state, 'KTNR')]
        print row[0]
        pop = []
        for i in range(2010,2035):
            pop.append(float(row[i - 2008].replace(',','')))
        ce.setAttribute(state, "POPULATION", pop)
        ce.setAttributeSource(state, "POPULATION", "OBJECT")