# project/tests/test_auth.py

import unittest

from project.tests.base import BaseTestCase

import json

class TestHomeBlueprint(BaseTestCase):

    def test_home(self):
        """ Test for home API"""
        with self.client:
            response = self.client.get(
                '/',
                content_type='application/json'
            )
            data = response.data.decode()
            self.assertEqual(response.status_code, 201)

if __name__ == '__main__':
    unittest.main()
