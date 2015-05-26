'''
Created on 26.05.2015

@author: btemperli, bbuff, cbadoud
'''
from scripting import *

import csv

# get a CityEngine instance
ce = CE()

cntns = {}
rgns = {}

if __name__ == '__main__':
    f = open('/Users/btemperli/fhnw/FS15/ivis/cityengine/ivis/data/je-d-01.02.01.02.07-2013.csv', 'rt')
    try:
        reader = csv.reader(f)
        for row in reader:
            try:
                cntns[float(row[1])] = row
                rgns[float(row[2])] = row
            except ValueError:
                pass
    finally:
        f.close()
            
    for state in ce.getObjectsFrom(ce.getObjectsFrom(ce.scene, ce.withName('Kantone'))[0]):
        # get content of this canton row
        row = cntns[ce.getAttribute(state, 'KTNR')]
        print row[0]
        population = []
        for i in range(3,9):
            population.append(int(row[i])) # total | total CH | men CH | women CH | total !CH | men !CH | women !CH
        ce.setAttribute(state, "POPULATION", population)
        ce.setAttributeSource(state, "POPULATION", "OBJECT")