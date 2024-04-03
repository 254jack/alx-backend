#!/usr/bin/env python3

'''Task 0: basic dictionary
'''


from base_caching import BaseCaching


class BasicCache(BaseCaching):
    '''A class `BasicCache`
    '''

    def put(self, key, item):
        '''assign to the self dictionary
        '''
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        '''return the value
        '''

        return self.cache_data.get(key, None)
