# In your app's apps.py file
import os
import sys
from django.apps import AppConfig

class CommentsConfig(AppConfig):
    name = 'comments'

    def ready(self):
        # Get the parent directory of the current file
        # This is the directory that contains the 'comments' app and your 'comments_extractor.py' file
        parent_dir = os.path.dirname(os.path.abspath(__file__))
        parent_dir = os.path.dirname(parent_dir)  # Go up one level to get the parent directory

        # Add the parent directory to the sys.path
        sys.path.insert(0, parent_dir)

        # Now you can import comments_extractor as if it were in the same directory
        from comments_extractor import import_comments_on_startup

