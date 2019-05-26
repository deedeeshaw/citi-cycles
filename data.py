######################################################################
# IMPORT DEFICIENCIES
######################################################################

import json

import pandas as pd


######################################################################
# TO POPULATE TABLE IN TABLE.JS
######################################################################
def get_all_data(table_name):

    cycles_df= pd.read_csv(table_name, usecols=["year", "startstationname",\
         "endstationname", "usertype", "gender", "birthyear", "tripduration"])
    
    return cycles_df.head(1000).to_json(orient='records')

######################################################################
# FOR ENDING STATION MARKERS IN MAP.JS
######################################################################

def end_station_location(table_name):
    
    end_station_df=pd.read_csv(table_name)
       

    return end_station_df.to_json(orient='records')

######################################################################
# FOR STARTING STATION MARKERS IN MAP.JS
######################################################################
def start_station_location(table_name):
    
    start_station_df=pd.read_csv(table_name)
    
    return start_station_df.to_json(orient='records')







        