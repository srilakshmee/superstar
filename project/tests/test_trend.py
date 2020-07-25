# project/tests/test_auth.py

import unittest

from project.tests.base import BaseTestCase

import json

class TestTrendBlueprint(BaseTestCase):

    def test_trend(self):
        """ Test for trend API"""
        with self.client:
            response = self.client.get(
                '/trend/year/2020',
                content_type='application/json'
            )
            data = json.loads(response.data.decode())
            self.assertTrue(data["artists"][0]["artists"] == 'The Weeknd')
            self.assertTrue(data["avg_duration"] == '186.4537 sec')
            self.assertTrue(len(data["artists"]) == 10)
            self.assertEqual(response.status_code, 201)

    def test_genre(self):
        """ Test for trend API"""
        with self.client:
            response = self.client.get(
                '/genre',
                content_type='application/json'
            )
            data = json.loads(response.data.decode())
            #self.assertTrue(data["artists"][0]["artists"] == 'The Weeknd')
            #self.assertTrue(data["avg_duration"] == '186.4537 sec')
            #self.assertTrue(len(data["artists"]) == 10)
            self.assertEqual(response.status_code, 201)
if __name__ == '__main__':
    unittest.main()
